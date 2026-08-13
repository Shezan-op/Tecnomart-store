import os
import glob

search_dir = r"c:\Users\techt\tecnomart-landing page"

def replace_fonts():
    for root, dirs, files in os.walk(search_dir):
        if 'node_modules' in root or '.next' in root or '.git' in root:
            continue
            
        for file in files:
            if file.endswith(('.css', '.jsx', '.html')):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    new_content = content
                    # Global replace
                    new_content = new_content.replace("'Inter',", "'Rajdhani',")
                    new_content = new_content.replace("'Inter'", "'Rajdhani'")
                    new_content = new_content.replace('"Inter",', '"Rajdhani",')
                    
                    new_content = new_content.replace("'Oxanium',", "'Orbitron',")
                    new_content = new_content.replace("'Oxanium'", "'Orbitron'")
                    new_content = new_content.replace('"Oxanium",', '"Orbitron",')
                    
                    # Also the font imports in globals.css
                    if 'globals.css' in file:
                        new_content = new_content.replace(
                            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oxanium:wght@400;600;700&display=swap",
                            "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
                        )
                    
                    # Also the inline styles in JSX if they forgot the quotes around font name
                    new_content = new_content.replace("fontFamily: 'Oxanium, sans-serif'", "fontFamily: 'Orbitron, sans-serif'")
                    new_content = new_content.replace("fontFamily: 'Inter, sans-serif'", "fontFamily: 'Rajdhani, sans-serif'")
                    
                    if new_content != content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated fonts in {filepath}")
                except Exception as e:
                    print(f"Failed {filepath}: {e}")

if __name__ == "__main__":
    replace_fonts()
