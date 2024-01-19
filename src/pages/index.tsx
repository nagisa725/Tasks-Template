import { Button } from "~/components/button";
import { Layout } from "~/components/layout";
import { Select } from "~/components/select";
import { TextArea } from "~/components/text-area";
import { TextField } from "~/components/text-field";
import styles from "~/styles/home.module.css";

export default function Home() {
  /**
   * ここにTODOリストのstateを宣言する
   **/
  // const [] = useState()

  return (
    <Layout>
      <div className={styles.form__wrapper}>
        <h1>FORM</h1>
        <TextField />
        <TextArea />
        <Select />
        <Button title="CREATE" />
      </div>

      <div className={styles.list__wrapper}>
        <h1 className={styles.list__title}>TODO LIST</h1>
        {/* ここにTODO LISTを表示する */}
      </div>
    </Layout>
  );
}
