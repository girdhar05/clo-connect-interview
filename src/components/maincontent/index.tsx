import useStyles from "./style"

export default function MainContent({children}: {children?: React.ReactNode}) {
  let classes = useStyles()
  return (
    <div className={classes.mainContainer}>
      { children }
    </div>
  )
}