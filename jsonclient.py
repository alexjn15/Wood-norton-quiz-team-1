import http.client
import json

conn = http.client.HTTPConnection('localhost', 4000)
conn.request('GET', '/return', '{}')
mydata = conn.getresponse().read()
print(json.loads(mydata))
