import {
  trigger,
  state,
  transition,
  style,
  animate,
  animation,
  useAnimation,
  keyframes
} from "@angular/animations";

export let bounceOutLeftAnimation = animation(
  animate(
    "300ms ease-in",
    keyframes([
      style({ offset: 0.2, opacity: 1, transform: "translateX(20px)" }),
      style({ offset: 1, opacity: 0, transform: "translateX(-100%)" })
    ])
  )
);

export let slide = trigger("slide", [
  transition(":enter", [
    style({ transform: "translateX(-10px)" }),
    animate(500)
  ]),

  transition(":leave", [
    // animate(300, style({ transform: "translateX(-30px)", opacity: 0 }))
    useAnimation(bounceOutLeftAnimation)
  ])
]);

export let fadeInAnimation = animation(
  [style({ opacity: 0 }), animate("{{ duration }} {{ easing }}")],
  {
    params: {
      duration: "2s",
      easing: "ease-out"
    }
  }
);

export let fadeOutAnimation = animation(
  [animate("{{ duration }} {{ easing }}", style({ opacity: 0 }))],
  {
    params: {
      duration: "500ms",
      easing: "ease-in"
    }
  }
);

export let fade = trigger("fade", [
  transition(":enter", useAnimation(fadeInAnimation)),
  transition("* => void", useAnimation(fadeOutAnimation))
]);
