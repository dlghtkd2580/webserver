from django.test import TestCase
import os
import datetime

path = "/Users/kimbyeonguk/"

time_arr = []
file_list = os.listdir(path)
file_list = [file for file in file_list if file.endswith(".txt")]
full_list = [os.path.join(path,i) for i in file_list]
time_sorted_txt_list = sorted(full_list, key=os.path.getctime, reverse=True)
for file in time_sorted_txt_list:
    create_time = os.path.getctime(file)
    create_time_stamp = datetime.datetime.fromtimestamp(create_time)
    time_string = datetime.datetime.strftime(create_time_stamp, '%Y-%m-%d %H:%M')
    time_arr.append(time_string)

zip_file = zip(time_arr,time_sorted_txt_list)
txt_list = time_sorted_txt_list


for file in txt_list:
    print(file)
