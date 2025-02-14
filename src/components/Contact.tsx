import { motion } from "framer-motion";
import { Form, Input, Button } from "antd";
import { Mail, MessageSquare, Send } from "lucide-react";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form] = Form.useForm<ContactFormValues>();

  const onFinish = async (values: ContactFormValues) => {
    const mailtoLink = `mailto:asim.ghaffar71@gmail.com?subject=New Contact Form Submission&body=Name: ${encodeURIComponent(
      values.name
    )}%0AEmail: ${encodeURIComponent(
      values.email
    )}%0AMessage: ${encodeURIComponent(values.message)}`;
    window.location.href = mailtoLink;
    form.resetFields();
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="space-y-4"
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  prefix={
                    <MessageSquare className="h-5 w-5 text-gray-400 mr-2" />
                  }
                  placeholder="Your Name"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  prefix={<Mail className="h-5 w-5 text-gray-400 mr-2" />}
                  placeholder="Your Email"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea
                  placeholder="Your Message"
                  size="large"
                  rows={4}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-full flex items-center justify-center"
                  icon={<Send className="h-5 w-5 mr-2" />}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
