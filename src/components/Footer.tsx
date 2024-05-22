import { Tag } from "@a_r_a_c_e_l_i/library";
import { Icon } from "@iconify/react";

export default function MainFooter() {
  return (
    <footer className="border-t border-blue-gray-200 text-xs px-[1rem]  pt-4 pb-7  italic text-blue-gray-600">

      <p className="pb-2">Actualizado en mayo de 2024</p>

      <p className="pb-2">Utilizando:</p>

      <ul className="tags">
        <Tag icon="React" />
        <Tag icon="TailwindCSS" />
        <Tag icon="CSS3" />
        <Tag icon="TypeScript" />
        <li>
          <Tag href="https://www.npmjs.com/package/@a_r_a_c_e_l_i/library">
            <span>@a_r_a_c_e_l_i/library</span>
            <Icon icon="ooui:link-external-ltr" />
          </Tag>
        </li>
      </ul>


    </footer>

    // <>
    // </>
  );
}

