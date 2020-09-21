import requests
from bs4 import BeautifulSoup


url = "https://uc.campusdish.com/en/LocationsAndMenus/CenterCourt"

page = requests.get(url)
soup = BeautifulSoup(page.content, 'html5lib')

table = soup.find_all('div', class_='menu__details')

titles = []
cals = []
infos =[]

#finds title, cals, and description in "Home Plates"
for item in table:
        if item.find('span', class_='item__name') is not None:    
        title = item.a.text
        titles.append(title)
        
        cal = item.find('span', class_='item__calories').text 
        cals.append(cal)
        
        info = item.find('p', class_='item__content').text
        infos.append(info)
print(titles)
print(infos)
print(cals)
