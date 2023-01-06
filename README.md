# Anagram Solver

# When input is an Anagram

![image](https://user-images.githubusercontent.com/91515578/210933861-5d622350-44f0-469b-ac88-dce9a5bbe429.png)

# When input is not an Anagram

![image](https://user-images.githubusercontent.com/91515578/210933962-2fd57e93-a2ff-4629-b5fe-a0349107b718.png)

# How it works?

  1. The inputs are passed as arguments into a function
  2. I then create a map as the data structure that will store the characters of the string as keys and the frequency of the character as the value
  3. I iterate through the string and store the keys and values
  4. I then iterate through the second string and for every key that is in the map, its frequency will be decremented by 1
  5. The final step is to iterate thrugh the values and check if a value is not equal to 0 then return false
  6. If the above step did not return false, then return true
