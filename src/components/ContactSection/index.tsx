import { useState } from "react";
import { useToast } from "../../hooks/use-toast";
import * as Element from "./styles";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { SectionContainer } from "../SectionContainer";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const serviceId = "gmailMessage";
      const templateId = "template_5ds1kpg";
      const userId = "fqyO1pCZLE3-VJ2u7";

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);

      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato em breve.",
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Erro ao enviar a Mensagem",
        description: "Por favor, tente novamente mais tarde",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SectionContainer id="contact">
      <Element.Header>
        <h3>Contato</h3>
        <h2>Vamos Conversar</h2>
        <p>
          Entre em contato para patrocínios, eventos ou para conhecer mais sobre
          as próximas competições.
        </p>
      </Element.Header>

      <Element.Container>
        <Element.ContactInfo>
          <Element.InfoTitle>Informações de Contato</Element.InfoTitle>
          <Element.InfoText>
            Nossa equipe responde mensagens em até 24 horas durante dias úteis.
          </Element.InfoText>

          <Element.InfoList>
            <Element.InfoItem>
              <Element.InfoIcon>📱</Element.InfoIcon>
              <Element.InfoContent>
                <Element.InfoLabel>Telefone</Element.InfoLabel>
                <Element.InfoValue>+55 11 99999-9999</Element.InfoValue>
              </Element.InfoContent>
            </Element.InfoItem>

            <Element.InfoItem>
              <Element.InfoIcon>✉️</Element.InfoIcon>
              <Element.InfoContent>
                <Element.InfoLabel>E-mail</Element.InfoLabel>
                <Element.InfoValue>takumi@driftking.com</Element.InfoValue>
              </Element.InfoContent>
            </Element.InfoItem>

            <Element.InfoItem>
              <Element.InfoIcon>🏁</Element.InfoIcon>
              <Element.InfoContent>
                <Element.InfoLabel>Redes Sociais</Element.InfoLabel>
                <Element.InfoValue>@takumi.drift</Element.InfoValue>
              </Element.InfoContent>
            </Element.InfoItem>
          </Element.InfoList>
        </Element.ContactInfo>

        <Element.ContactForm onSubmit={handleSubmit(onSubmit)}>
          <Element.FormGroup>
            <Element.Label htmlFor="name">Nome</Element.Label>
            <Element.Input
              type="text"
              id="name"
              placeholder="Seu nome Completo"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <Element.ErrorMessage>Nome é obrigatório</Element.ErrorMessage>
            )}
          </Element.FormGroup>

          <Element.FormGroup>
            <Element.Label htmlFor="email">E-mail</Element.Label>
            <Element.Input
              type="email"
              id="email"
              placeholder="seu.email@exemplo.com"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <Element.ErrorMessage>
                E-mail válido é obrigatório
              </Element.ErrorMessage>
            )}
          </Element.FormGroup>

          <Element.FormGroup>
            <Element.Label htmlFor="phone">Telefone</Element.Label>
            <Element.Input
              type="tel"
              id="phone"
              placeholder="(00) 00000-0000"
              {...register("phone")}
            />
          </Element.FormGroup>

          <Element.FormGroup>
            <Element.Label htmlFor="subject">Assunto</Element.Label>
            <Element.Input
              type="text"
              id="subject"
              placeholder="Como podemos ajudar"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <Element.ErrorMessage>Assunto é obrigatório</Element.ErrorMessage>
            )}
          </Element.FormGroup>

          <Element.FormGroup>
            <Element.Label htmlFor="message">Mensagem</Element.Label>
            <Element.Textarea
              id="message"
              placeholder="Digite sau mensagem..."
              rows={5}
              {...register("message", { required: true })}
            />
            {errors.message && (
              <Element.ErrorMessage>
                Mensagem é obrigatória
              </Element.ErrorMessage>
            )}
          </Element.FormGroup>

          <Element.SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </Element.SubmitButton>
        </Element.ContactForm>
      </Element.Container>
    </SectionContainer>
  );
}
