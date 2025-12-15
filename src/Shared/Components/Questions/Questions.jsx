import { memo } from 'react';
import './Questions.modules.css';
import MainTitle from '../MainTitle/MainTitle';
import CommonQuestion from './CommonQuestion';

const Questions = ({title}) => {
  return (
    <>
      <div className="questions py-5" id="questions">
        <div className="container">
          <MainTitle title="الاسئلة الشائعة" />

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  كيف يتم تسجيل شقة تمليك في الشهر العقاري؟
                </button>
              </h3>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  لتسجيل شقة تمليك، يجب تقديم عقد البيع النهائي الموثق، وشهادة
                  التصرفات العقارية التي تثبت ملكية البائع، ودفع الرسوم
                  القانونية. يتم تقديم الطلب إلى الشهر العقاري بعد فحص العقار
                  والتأكد من صحة المستندات، وإذا تم قبول الطلب، يتم التسجيل
                  الرسمي في السجل العقاري.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ما هي الشروط القانونية لرفع دعوى خلع؟{" "}
                </button>
              </h3>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  a: "تتطلب دعوى الخلع تنازل الزوجة عن حقوقها المالية، مثل مؤخر
                  الصداق والنفقة، وكذلك إرجاع مقدم الصداق للزوج. يجب على الزوجة
                  تقديم طلب رسمي للمحكمة مع توضيح أسباب استحالة استمرار الحياة
                  الزوجية، ولا يشترط موافقة الزوج على الخلع. تقيم المحكمة الدعوى
                  بناءً على الشهادات والمستندات المقدمة.",
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  يمكن استرداد الشبكة والهدايا بعد فسخ الخطوبة؟
                </button>
              </h3>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  في القانون المصري، يُعتبر الخاطب له الحق في استرداد الشبكة
                  والهدايا بعد فسخ الخطوبة. يتعين رفع دعوى أمام المحكمة
                  لإستردادها، ويجب على الخاطب إثبات أن فسخ الخطوبة كان لأسباب
                  خارجة عن إرادته.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  كيف يتم تسجيل شقة تمليك في الشهر العقاري؟
                </button>
              </h3>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  لتسجيل شقة تمليك، يجب تقديم عقد البيع النهائي الموثق، وشهادة
                  التصرفات العقارية التي تثبت ملكية البائع، ودفع الرسوم
                  القانونية. يتم تقديم الطلب إلى الشهر العقاري بعد فحص العقار
                  والتأكد من صحة المستندات، وإذا تم قبول الطلب، يتم التسجيل
                  الرسمي في السجل العقاري.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseFive"
                >
                  كيف يتم تسجيل شقة تمليك في الشهر العقاري؟
                </button>
              </h3>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  لتسجيل شقة تمليك، يجب تقديم عقد البيع النهائي الموثق، وشهادة
                  التصرفات العقارية التي تثبت ملكية البائع، ودفع الرسوم
                  القانونية. يتم تقديم الطلب إلى الشهر العقاري بعد فحص العقار
                  والتأكد من صحة المستندات، وإذا تم قبول الطلب، يتم التسجيل
                  الرسمي في السجل العقاري.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  ما هي الشروط القانونية لرفع دعوى خلع؟{" "}
                </button>
              </h3>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  a: "تتطلب دعوى الخلع تنازل الزوجة عن حقوقها المالية، مثل مؤخر
                  الصداق والنفقة، وكذلك إرجاع مقدم الصداق للزوج. يجب على الزوجة
                  تقديم طلب رسمي للمحكمة مع توضيح أسباب استحالة استمرار الحياة
                  الزوجية، ولا يشترط موافقة الزوج على الخلع. تقيم المحكمة الدعوى
                  بناءً على الشهادات والمستندات المقدمة.",
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  يمكن استرداد الشبكة والهدايا بعد فسخ الخطوبة؟
                </button>
              </h3>
              <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  في القانون المصري، يُعتبر الخاطب له الحق في استرداد الشبكة
                  والهدايا بعد فسخ الخطوبة. يتعين رفع دعوى أمام المحكمة
                  لإستردادها، ويجب على الخاطب إثبات أن فسخ الخطوبة كان لأسباب
                  خارجة عن إرادته.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  كيف يتم تسجيل شقة تمليك في الشهر العقاري؟
                </button>
              </h3>
              <div
                id="collapseEight"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  لتسجيل شقة تمليك، يجب تقديم عقد البيع النهائي الموثق، وشهادة
                  التصرفات العقارية التي تثبت ملكية البائع، ودفع الرسوم
                  القانونية. يتم تقديم الطلب إلى الشهر العقاري بعد فحص العقار
                  والتأكد من صحة المستندات، وإذا تم قبول الطلب، يتم التسجيل
                  الرسمي في السجل العقاري.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Questions);