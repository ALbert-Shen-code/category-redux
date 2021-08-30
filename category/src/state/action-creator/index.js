import * as api from "../../api/index";
export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
    let rootList = data.filter((rootItem) => rootItem.parent === "root");

    rootList.map((item) => {
      item.children = [];
      const hasChild = (t) => {
        let child = data.filter((s) => s.parent === t.categoryId);
        t.children = child;
        t.value = t.name;
        t.title = t.categoryId;

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
