/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("White", "./Sprite1/costumes/White.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271
      }),
      new Costume("Orange", "./Sprite1/costumes/Orange.svg", { x: 48, y: 50 }),
      new Costume("Red", "./Sprite1/costumes/Red.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271
      }),
      new Costume("Blue", "./Sprite1/costumes/Blue.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271
      }),
      new Costume("Yellow", "./Sprite1/costumes/Yellow.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271
      }),
      new Costume("Pink", "./Sprite1/costumes/Pink.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "White";
    while (true) {
      yield* this.askAndWait("Enter the color");
      this.stage.vars.color = this.answer;
      if (this.toString(this.stage.vars.color) === "Blue") {
        this.costume = "Blue";
      } else {
        if (this.toString(this.stage.vars.color) === "Pink") {
          this.costume = "Pink";
        } else {
          if (this.toString(this.stage.vars.color) === "Yellow") {
            this.costume = "Yellow";
          } else {
            if (this.toString(this.stage.vars.color) === "Orange") {
              this.costume = "Orange";
            } else {
              if (this.toString(this.stage.vars.color) === "Red") {
                this.costume = "Red";
              } else {
                yield* this.sayAndWait("I haven't coded for this color", 2);
                yield* this.sayAndWait("Try these", 0.6);
                yield* this.sayAndWait("Blue, Yellow, Orange, Pink and Red", 2);
              }
            }
          }
        }
      }
      yield;
    }
  }
}
