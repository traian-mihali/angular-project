import {
  trigger,
  transition,
  useAnimation,
  style,
  animate,
  group,
  query,
  stagger,
  animateChild
} from "@angular/animations";
import { fadeInAnimation, bounceOutLeftAnimation } from "../animations";

export const todosAnimation = trigger("todosAnimation", [
  transition(":enter", [
    group([
      query("h1", [style({ transform: "translateY(-20px)" }), animate(1000)]),
      query("@todoAnimation", stagger(200, animateChild()))
    ])
  ])
]);

export const todoAnimation = trigger("todoAnimation", [
  transition(":enter", [useAnimation(fadeInAnimation)]),

  transition(":leave", [
    style({ backgroundColor: "red" }),
    animate(500),
    useAnimation(bounceOutLeftAnimation)
  ])
]);
