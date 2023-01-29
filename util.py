import random
import requests
import json
import re
from bs4 import BeautifulSoup

class DataGatherer():

    @staticmethod
    def fetch():
        """Grab metro data"""
        link = 'https://www.metro.ca/en/online-grocery/aisles/deli-prepared-meals/ready-meals-sides'
        rarity = "legendary"
        n = random.randint(0, 100)
        if n < 40:
            link += '-page-' + str(random.randint(20, 43))
            rarity = "common"
        elif n < 70:
            link += '-page-' + str(random.randint(5, 20))
            rarity = "rare"
        elif n < 90:
            link += '-page-' + str(random.randint(2, 5))
            rarity = "epic"

        res = requests.get(link).content #broken, 403s
        res = open('./Deli & Prepared Meals _ Metro.html', 'r').read() #proof of concept

        #parse all products
        soup = BeautifulSoup(res, 'html.parser')
        product_html = soup.find_all('div', {'class': 'tile-product'})
        products = []
        for elm in product_html:
            try:
                products.append(
                    {
                        "name": elm.find('div', {'class': 'head__title'}).string.strip(),
                        "cost": float(elm.find('span', {'class': 'price-update'}).string[1:]),
                        "img":  list(elm.find('picture', {'class': 'defaultable-picture'}).children)[1]["srcset"].strip().split(' ')[0][:-2],
                        "rarity": random.choice(["common", "rare", "epic", "legendary"]) #proof of concept
                    }
                )
            except:
                pass
        random.shuffle(products)
        return products

    @staticmethod
    def code(items):
        result = "FDBX"
        match items:
            case 1:
                result += "20"
            case 2:
                result += "30"
            case 5:
                result += "50"

        return result + str(random.randint(1000, 9999))
