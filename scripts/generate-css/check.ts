import { shorthandProps } from "./shorthand-props"
import { tokens } from "./tokens"
import { uiProps } from "./ui-props"
import type { CSSProperty } from "."

export const checkProps = (
  styles: (CSSProperty & { type: string; deprecated: boolean })[],
) => {
  const propMap = styles.map(({ prop }) => prop) as string[]
  const uiPropMap = Object.keys(uiProps) as string[]

  Object.entries(tokens).reduce<string[]>((prev, [token, properties]) => {
    properties.forEach((property) => {
      if (prev.includes(property))
        throw new Error(
          `Duplicated prop in "token props", please check "${property}" in "${token}"`,
        )
    })

    return [...prev, ...properties]
  }, [])

  Object.entries(shorthandProps).reduce<string[]>(
    (prev, [relatedProperty, properties]) => {
      properties.forEach((property) => {
        if (prev.includes(property))
          throw new Error(
            `Duplicated prop in "shorthand props", please check "${property}" in "${relatedProperty}"`,
          )
      })

      return [...prev, ...properties]
    },
    [],
  )

  Object.entries(shorthandProps).forEach(([relatedProperty, properties]) => {
    properties.forEach((property) => {
      if (propMap.includes(property))
        throw new Error(
          `Shorthand Prop already exists in "CSS Properties", please check "${property}" in "${relatedProperty}"`,
        )
    })
  })

  Object.entries(shorthandProps).forEach(([relatedProperty, properties]) => {
    properties.forEach((property) => {
      if (propMap.includes(property))
        throw new Error(
          `Shorthand Prop already exists in "CSS Properties", please check "${property}" in "${relatedProperty}"`,
        )

      if (uiPropMap.includes(property))
        throw new Error(
          `Shorthand Prop already exists in "UI Props", please check "${property}" in "${relatedProperty}"`,
        )
    })
  })
}
