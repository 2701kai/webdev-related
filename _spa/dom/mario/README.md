# Let's make Mario walk - DOM keyboard events

We want make Mario walk using the keyboard.

  ![Mario Walk](assets/mario-walk.gif)

## Task 1

- Create a `script.js` file and link it with provided `index.html` file.

## Task 2

- In `script.js`:

  - Create a variable called `mario` that will contain the html element with an id `mario`
  - Create a variable called `imgMario` that will contain the html `img` element
  - Set source of image to `mario-stand.git` - to do this `imgMario` variable
    > Hint: you can change the `src` attribute with the `src` property of an image element with `myImage.src = "newSource.png"`

## Task 3

- Create a function `stopMario`, that will stop Mario when it's called
  > Hint: use `src` attribute to change .gif.

## Task 4

- Create a function `moveMario`, that will listen to keyboard events
  - You could also apply styles globally/outside the function to Mario as needed
- Check if `src` attribute is set to `mario-walk.gif` if not, set it to `mario-walk.gif`
- Check which arrow key was pressed (arrow left or arrow right) and apply right styles from description below

#### Walk

- If the right arrow key was pressed, Mario should be moved 10 pixels to the right
- If the left arrow key was pressed, Mario should be moved 10 pixels to the left

#### Hold down the key

- Mario should keep moving as long as any key is pressed

#### Rotate

- You want Mario to turn in the direction he is going
  > Hint: An image can be mirrored with `scale: -1 1;` - [see MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scale).

#### Stand still

- If no key is pressed, we don't want Mario to animate, but display the still image `assets/mario-stand.gif`

## Step 5

- Add event listener that will listen for an event when you press any key on your keyboard. Use function `moveMario` as a callback.
- Add event listener that will listen for an event when you release pressed key on your keyboard. Use function `stopMario"` as a callback.
