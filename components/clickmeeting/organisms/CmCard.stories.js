import CmCardBody from "@components/clickmeeting/atoms/CmCardBody";
import CmCardFooter from "@components/clickmeeting/atoms/CmCardFooter";
import CmCardHeader from "@components/clickmeeting/atoms/CmCardHeader";
import CmCard from "@components/clickmeeting/organisms/CmCard";

export default {
	title: "Organisms/CmCard",
	component: CmCard,
};

const TemplateBasic = (args, { argTypes }) => ({
	components: { CmCard },
	props: Object.keys(argTypes),
	template: `
      <CmCard :tag="tag" :no-body="noBody">
        <template #header>
          Card Header  
        </template>
        <h1>
          Card Body
        </h1>
        <template #footer>
          Card Footer
        </template>
      </CmCard>
    `,
});

export const Basic = TemplateBasic.bind({});

Basic.args = {
	tag: "div",
	noBody: false,
};

const TemplateHeaderProp = (args, { argTypes }) => ({
	components: { CmCard },
	props: Object.keys(argTypes),
	template: `
    <CmCard :tag="tag" :header="header" :no-body="noBody">
      <h1>
        Card Body
      </h1>
      <template #footer>
        Card Footer
      </template>
    </CmCard>
  `,
});

export const HeaderProp = TemplateHeaderProp.bind({});

HeaderProp.args = {
	tag: "div",
	noBody: false,
	header: "Card Header from props",
};

const TemplateNoBody = (args, { argTypes }) => ({
	components: { CmCard, CmCardHeader, CmCardBody, CmCardFooter },
	props: Object.keys(argTypes),
	template: `
    <CmCard :tag="tag" :header="header" :no-body="noBody">
      <CmCardHeader>
        This is card header mounted as component manually
      </CmCardHeader>

      <CmCardBody>
        <h1>
          This is card body mounted as component manually
        </h1>
      </CmCardBody>

      <CmCardFooter>
        This is card footer mounted as component manually
      </CmCardFooter>
  
    </CmCard>
  `,
});

export const NoBody = TemplateNoBody.bind({});

NoBody.args = {
	tag: "div",
	noBody: true,
};
