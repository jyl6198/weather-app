import json


# set up environment
def main():
    file = open('db.json')
    data = json.load(file)

    dataList = data['cities']
    print(dataList)

if __name__ == "__main__":
    main()