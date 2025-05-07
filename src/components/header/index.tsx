import useStyles from "./style"

export default function Header() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src="https://storagefiles.clo-set.com/public/connect/common/connect-desktop-header-bi.svg" alt="Logo" />
        </div>
      </div>
    </>
  )
}