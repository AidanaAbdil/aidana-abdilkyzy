import { Divider, Flex, Tag } from "antd";

export default function Skills() {
  return (
    <section id="skills">
      <div class="container">
        <Flex gap="4px 0" wrap>
          <Tag bordered={false} color="processing">
            HTML
          </Tag>
          <Tag bordered={false} color="success">
            CSS
          </Tag>
          <Tag bordered={false} color="error">
            Javascript
          </Tag>
          <Tag bordered={false} color="warning">
            React
          </Tag>
          <Tag bordered={false} color="magenta">
            PHP
          </Tag>
          <Tag bordered={false} color="red">
            Laravel
          </Tag>
          <Tag bordered={false} color="volcano">
            MySQL
          </Tag>
          <Tag bordered={false} color="orange">
            Figma
          </Tag>
          <Tag bordered={false} color="gold">
            Mockups
          </Tag>
          <Tag bordered={false} color="lime">
            Trello
          </Tag>
        </Flex>
      </div>
    </section>
  );
}
