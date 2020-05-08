# Button-Delete
## Definition:
Create HTML buttons as link or button tag.


## Attributes
- ```value``` => set the id for delete (default: '')
- ```route``` => set href tag by link button (default: '#')
- ```type``` => set type attribute from Button (```link, button, submit, reset```).


## Slotes name
- ```default``` => set the button text.

## Dependences
- ```ressources/js/dialog/delete.vue``` => Dialog for ask
- ```ressources/sass/buttons/btn-delete.scss``` => the button design
- ```ressources/views/include/formdelete.blade.php``` => A form to send the delete submt
- ```public/js/myFunction.js``` => A function for save the ID


## Example
```
<button-delete value="2">Löschen</button-delete>

```
