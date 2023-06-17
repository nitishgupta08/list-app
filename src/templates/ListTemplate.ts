import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();
  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className =
        "my-1 p-3 flex justify-between bg-accent rounded-lg bg-opacity-20 items-center";

      const div = document.createElement("div") as HTMLDivElement;
      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = item.id;
      check.checked = item.checked;
      check.className = "w-4 h-4";
      div.append(check);

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;
      label.className = "ml-2 text-xl";
      div.append(label);

      if (item.checked) {
        label.classList.add("line-through");
        li.classList.add("opacity-50");
      } else {
        label.classList.remove("line-through");
        li.classList.remove("opacity-50");
      }

      check.addEventListener("change", () => {
        item.checked = !item.checked;
        if (item.checked) {
          label.classList.add("line-through");
          li.classList.add("opacity-50");
        } else {
          label.classList.remove("line-through");
          li.classList.remove("opacity-50");
        }
        fullList.save();
      });

      li.append(div);
      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.textContent = "X";
      button.className = "p-2 rounded-md bg-primary-button text-[#fff]";
      li.append(button);

      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      this.ul.append(li);
    });
  }
}
