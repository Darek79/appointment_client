export const ErrorCom = ({clName, clError, txt}) => (
  <div className={clName}>
    <p className={clError}>{txt.toUpperCase()}</p>
  </div>
);
