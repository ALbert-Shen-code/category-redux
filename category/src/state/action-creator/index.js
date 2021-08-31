import * as api from "../../api/index";
export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
    let rootList = data.filter((rootItem) => rootItem.parent === "root");

    rootList = rootList.sort((a, b) => {
      let m = a.categoryId.slice(-1);
      let n = b.categoryId.slice(-1);
      return m - n;
    });

    rootList.map((item) => {
      item.children = [];
      const hasChild = (t) => {
        let child = data.filter((s) => s.parent === t.categoryId);
        t.children = child;
        t.value = t.categoryId;
        t.title = t.name;
        t.children = t.children.sort((a, b) => {
          let m = a.categoryId.slice(-1);
          let n = b.categoryId.slice(-1);
          return m - n;
        });
        //call the function again if the children array is not empty
        if (t.children.length > 0) {
          t.children.map((gs) => {
            hasChild(gs);
          });
        } else {
          return t;
        }
      };
      //call the function again
      hasChild(item);
    });
    dispatch({ type: "fetch-data", payload: rootList });
  } catch (error) {
    console.log(error.message);
  }
};
