# Context
A simple script to merge the files in a directory in one file.

For example I had a lot of files in my directory which I wanted to converge in one file.

Before running the script
/dir
    file1.md
    file2.md
    file3.md

After running the script
/dir
    file1.md
    file2.md
    file3.md
    concatenated-file.md

The concatenated-file has contents of file1, file2, file3

file1
```
a
```

file2
```
b
```

file3
```
c
```

concatenated-file
```
a

---

b


---

c
```

# How to run
In the env file, set the part of input directory and output file and 
run
```
node merge-directory.js
```