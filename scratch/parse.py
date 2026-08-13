from bs4 import BeautifulSoup
import sys

try:
    with open(r'C:\Users\techt\Downloads\unitedcarriers\unitedcarriers.com\index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
        
    soup = BeautifulSoup(html_content, 'html.parser')
    footer = soup.find('footer') or soup.find(class_=lambda c: c and 'footer' in c.lower())
    
    if footer:
        print(footer.prettify())
    else:
        print('No footer tag or class found. Last 5 sections or divs:')
        # Let's find the main elements near the end of body
        body = soup.find('body')
        if body:
            children = list(body.find_all(recursive=False))
            for c in children[-5:]:
                print(f"Tag: {c.name}, Class: {c.get('class')}, ID: {c.get('id')}")
except Exception as e:
    print(e)
