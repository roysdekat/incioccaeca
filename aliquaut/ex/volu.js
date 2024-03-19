import { getDatabase, ref, child, get } from "firebase/database";

const db = getDatabase();

const loadGames = () => {
  const dbRef = ref(db);
  get(child(dbRef, `games`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
};
