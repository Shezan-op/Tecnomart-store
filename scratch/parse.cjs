const fs = require('fs');

try {
    const html = fs.readFileSync('C:\\Users\\techt\\Downloads\\unitedcarriers\\unitedcarriers.com\\index.html', 'utf8');
    
    const footerIndex = html.indexOf('<footer');
    if (footerIndex !== -1) {
        const footerEndIndex = html.indexOf('</footer>', footerIndex);
        if (footerEndIndex !== -1) {
            console.log(html.substring(footerIndex, footerEndIndex + 9));
        } else {
            console.log("Found <footer but no </footer>");
        }
    } else {
        console.log("No <footer found. Searching for class containing 'footer'...");
        // Match class="something footer something"
        const match = html.match(/<[^>]+class="[^"]*footer[^"]*"[^>]*>/i);
        if (match) {
            const tagIndex = match.index;
            console.log("Found tag:", match[0]);
            console.log("Content around it:", html.substring(tagIndex - 100, tagIndex + 500));
        } else {
            console.log("Nothing found.");
        }
    }
} catch (e) {
    console.error(e);
}
