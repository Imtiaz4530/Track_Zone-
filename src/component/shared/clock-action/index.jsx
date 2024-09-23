import { useState } from "react";
import Modal from "../modal";
import Button from "../../ui/Button/Button";
import styles from "./index.module.css";

const ClockAction = ({
  local = false,
  createNewClock,
  updateClock,
  localClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [open, setOpen] = useState(false);

  const createClock = (values) => {
    createNewClock(values);
  };

  const handleCreate = () => {
    setIsCreate(!isCreate);
    setOpen(true);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
    setOpen(true);
  };

  return (
    <>
      <Button
        onClick={() => handleEdit()}
        value={"Edit"}
        className={`${styles.button} ${styles.edit}`}
      />

      {local ? (
        <Button
          onClick={() => handleCreate()}
          value={"Create"}
          className={`${styles.button} ${styles.create}`}
        />
      ) : (
        <Button
          onClick={() => deleteClock(localClock.id)}
          className={`${styles.button} ${styles.delete}`}
          value={"Delete"}
        />
      )}
      {isEdit && (
        <>
          <Modal
            open={open}
            setOpen={setOpen}
            handleClock={updateClock}
            values={localClock}
            title={local}
            isClosed={setIsEdit}
            edit={isEdit}
            className={styles.modal}
          />
        </>
      )}
      {isCreate && (
        <>
          <Modal
            open={open}
            setOpen={setOpen}
            handleClock={createClock}
            isClosed={setIsCreate}
          />
        </>
      )}
    </>
  );
};

export default ClockAction;
