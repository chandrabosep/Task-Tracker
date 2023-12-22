export enum CollectionColors {
  sunset = "bg-gradient-to-r from-sky-500 to-indigo-500",
  sunset2 = "bg-gradient-to-r from-sky-700 to-indigo-700",
  sunset3 = "bg-gradient-to-r from-sky-900 to-indigo-900",
  sunset4 = "bg-gradient-to-r from-sky-400 to-indigo-400",
  sunset5 = "bg-gradient-to-r from-sky-300 to-indigo-300",
}

export type CollectionColor = keyof typeof CollectionColors;