# ICombobox
## Definition:
A interface for models to HTML combobox.
It provides two functions for the HTML options of a combobox.
## Namespace
```App\Helpers\Interfaces\ICombobox```
## Functions
- ```cbOptionValue``` => the value for value attribute 
- ```cbOptionCaption``` => the caption in combobox.


## Example
```
class User implements \App\Helpers\Interfaces\ICombobox
{
    //Combobox value
    public function cbOptionValue(){
        return $this->id;
    }
    
    //Combobox caption
    public function cbOptionCaption(){
        return $this->Name;
    }
    
}

```
