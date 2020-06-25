from bs4 import BeautifulSoup
from io import StringIO
import requests
import json


programersUrl = "https://programmers.co.kr/companies?page="
companiesUrl = "https://programmers.co.kr"

result = dict()

company = []
companyAddress = []

for page in range(1, 7):
    request = requests.get(f"{programersUrl}{page}")
    html = request.text
    soup = BeautifulSoup(html, 'html.parser')

    for i in range(1, 21):
        title = soup.select(f"#tab_position > section > ul > li:nth-child({i}) > a > div.right > h5")[0].text
        address = soup.select(f"#tab_position > section > ul > li:nth-child({i}) > a > div.right > ul > li:nth-child(1)")[0].text
        company.append(title)
        companyAddress.append(address)
        # result[title] = address
        # print(title, " / ", address)

# json_result = json.dumps(result, ensure_ascii=False, indent=2)
# print(json_result)

result['companies'] = company
result['address'] = companyAddress

with open('companies.json', 'w', encoding='utf-8') as make_file:
    json.dump(result, make_file, ensure_ascii=False, indent="\t")
