# -*- coding: utf-8 -*-
"""Untitled0.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1u_Zq-xGb5Qq5xr6ofkhUkzyiuXZLArSC
"""

def reverse(array):
  new_string = '';

  for s in array[::-1]:
    new_string += s
  
  print(new_string)

string_array = 'PATO';

reverse(string_array)