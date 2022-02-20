import styles from "./SearchBar.module.css";

export function SearchBar(props) {
  return (
    <div className={styles.generalBar}>
      <input
        type="text"
        area="searchParams"
        className={styles.searchBar}
        placeholder={props.placeholder}
        onKeyUp={(event) => {
        props.filterAPI(event.target.value);
        }}
      />
    </div>
  );
}
