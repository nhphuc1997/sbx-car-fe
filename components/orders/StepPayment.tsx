import { Steps } from "antd";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function StepPayment() {
  const STEPS = [
    { title: "User Infor", disabled: true },
    { title: "Pay" },
    { title: "Successfully" },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="py-4">
      <Steps current={current} items={STEPS} onChange={(e) => setCurrent(e)} />
      <div className="py-4">
        {current === 0 && <Step1 />}
        {current === 1 && <Step2 />}
        {current === 2 && <Step3 />}
      </div>
    </div>
  );
}
