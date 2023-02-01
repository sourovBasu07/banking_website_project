import React from "react";

import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`} id="clients">
      <div className={`w-full flex-wrap ${styles.flexCenter}`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`sm:min-w-[192px] min-w-[120px] ${styles.flexCenter} flex-1 m-5`}
          >
            <img
              src={client.logo}
              alt="Client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
