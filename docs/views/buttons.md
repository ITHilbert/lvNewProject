# Buttons
## Definition:
Create HTML buttons as link or button tag.
## Attributes
- ```route``` => set href tag by link button (default: '#')
- ```type``` => set type attribute from Button (```link, button, submit, reset```).

## Slotes name
- ```default```

## Buttons
- ```hbutton``` => a master for buttons (type: link)
- ```button-back``` => a button for go back (type: link)
- ```button-create``` => a button for create/add(type: link)
- ```button-delete``` => a button for delete (type: button)
- ```button-edit``` => a button for edit (type: link)
- ```button-save``` => a button for save (type: submit)
- ```button-show``` => a button for show (type: link)
- ```button-submit``` => a button for submit (type: submit)

## Example
```
<button-create route="/test.html"></button-create>
<button-create>Button-Create</button-create>                
 
<button-show>Button-Show</button-show>
 
<button-edit>Button-Edit</button-edit>

<button-save>Button-Save</button-save>
 
<button-back>Button-Back</button-back>
 
<button-submit>Button-Submit</button-submit>

<button-delete>Button-Delete</button-delete>
```
