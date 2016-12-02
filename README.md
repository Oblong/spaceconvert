# spaceconvert

Convert from room + feld + (optionally) room proteins ==> space definition

# Installation

`npm install spaceconvert -g`

# Usage

        ./spaceconvert.js [options]


```
Options

  --screen string   A screen.protein file, normal or multi-machine style.                         
                    Example: https://gist.github.com/sandover/247d9acb9e33769813b2ba55d592a53e    
  --feld string     A feld.protein file, normal or kombi-feld style.                              
                    Example: https://gist.github.com/sandover/1f306bba2e70d1fbe6040f22920a7d39    
  --room string     A room.protein file (optional).                                               
                    Example: https://gist.github.com/sandover/b8a1ca0b039c8d882a9e3e98a2e6ea42    
```

Output is sent to stdout in JSON format.
