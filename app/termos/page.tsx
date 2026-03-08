"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PRIVACY_MD = `# Política de Privacidade

Última atualização: 2026-02-03

Esta Política de Privacidade descreve como o aplicativo CrossFit889 ("App") coleta, usa e protege informações pessoais e dados relacionados à nutrição. Ao usar o App, você concorda com esta Política.

## 1. Dados que coletamos

### 1.1 Dados pessoais
- Nome
- E-mail
- CPF

### 1.2 Dados de perfil e nutrição (dados de saúde)
- Data de nascimento
- Gênero
- Peso e altura
- Meta nutricional
- Registros de refeições e macros

### 1.3 Conteúdo do chat e IA
- Mensagens enviadas e recebidas
- Interações com a IA "Diana"

### 1.4 Dados de assinatura
- Status da assinatura
- Datas de início e expiração

## 2. Como usamos os dados

- Criar e manter sua conta
- Personalizar recomendações nutricionais
- Registrar refeições e metas
- Fornecer respostas da IA
- Exibir status de assinatura e controle de acesso
- Melhorar a qualidade do App e suporte

## 3. IA (Diana)

As mensagens enviadas no chat podem ser processadas por um serviço de IA para gerar respostas e recomendações. O App não envia áudio para a IA; apenas texto.

## 4. Compartilhamento de dados

Não vendemos seus dados. Compartilhamos informações apenas com:
- Supabase (autenticação, banco de dados e armazenamento)
- Serviços de IA para processamento de mensagens (texto)

## 5. Armazenamento e segurança

Os dados são armazenados no Supabase. Utilizamos políticas de segurança (RLS) para limitar acesso e medidas de proteção adequadas. Ainda assim, nenhum sistema é 100% seguro.

## 6. Retenção

Mantemos os dados enquanto sua conta estiver ativa ou conforme necessário para operar o App. Você pode solicitar exclusão a qualquer momento.

## 7. Seus direitos

Você pode:
- Acessar e atualizar seus dados
- Solicitar exclusão de conta e dados

## 8. Assinaturas

Dados de assinatura são usados para habilitar recursos premium. O pagamento dos planos é realizado na recepção da academia; o App não processa nem armazena dados de pagamento.

## 9. Contato

Para dúvidas sobre privacidade, entre em contato:
- E-mail: contato@crossfit889.com.br

## 10. Alterações

Esta Política pode ser atualizada. Avisaremos no App quando houver mudanças relevantes.`;

const TERMS_MD = `# Termos de Uso

Última atualização: 2026-02-03

Estes Termos de Uso regem o uso do aplicativo CrossFit889 ("App"). Ao criar uma conta ou utilizar o App, você concorda com estes Termos.

## 1. Sobre o App

1.1. O App tem como objetivo auxiliar na organização da sua alimentação, metas de macronutrientes e registro de hábitos, incluindo um chat com a assistente de IA "Diana".  
1.2. O App **não substitui** acompanhamento profissional de nutricionistas, médicos ou outros profissionais de saúde.

## 2. Conta e acesso

2.1. Para usar o App, você precisa criar uma conta com um e-mail válido e senha.  
2.2. Você é responsável por manter a confidencialidade da sua senha e por todas as atividades realizadas na sua conta.  
2.3. Caso suspeite de uso não autorizado, altere sua senha e entre em contato com o suporte.

## 3. Conteúdo e dados informados

3.1. Você é responsável pelas informações que cadastra no App (peso, altura, metas, refeições, mensagens no chat etc.).  
3.2. Não insira informações falsas, ofensivas, ilegais ou que violem direitos de terceiros.  
3.3. O App pode usar seus dados para personalizar recomendações, conforme descrito na Política de Privacidade.

## 4. Assistente de IA (Diana)

4.1. As respostas da IA são geradas com base em modelos de linguagem e informações fornecidas por você.  
4.2. As orientações têm caráter **educativo e de apoio** e não constituem recomendação médica, nutricional ou de treinamento individualizada.  
4.3. Sempre consulte profissionais de saúde antes de fazer mudanças significativas em dieta, treino ou uso de suplementos.

## 5. Assinaturas e recursos premium

5.1. Alguns recursos podem exigir assinatura ativa. Os detalhes de planos e preços são informados na recepção da academia.  
5.2. A cobrança, renovação e cancelamento são realizados na recepção da CrossFit889 e seguem a Política de Cancelamento deste App.

## 6. Uso aceitável

6.1. Você concorda em **não** utilizar o App para:
- Praticar ou incentivar atividades ilegais;
- Tentar acessar contas de terceiros;
- Realizar engenharia reversa, copiar ou clonar o App;
- Usar automações não autorizadas ou bots para acessar o serviço.

6.2. Podemos suspender ou encerrar contas que violem estes Termos ou que apresentem uso abusivo.

## 7. Propriedade intelectual

7.1. Todo o código, design, marca, logotipos e conteúdos do App (exceto dados que você mesmo cadastra) são de propriedade da CrossFit889 ou de seus licenciantes.  
7.2. Você recebe uma licença pessoal, limitada, não exclusiva e intransferível para usar o App enquanto seguir estes Termos.

## 8. Isenção de responsabilidade

8.1. O App é fornecido "no estado em que se encontra", sem garantias de resultados específicos.  
8.2. Não garantimos disponibilidade ininterrupta, ausência de erros ou adequação perfeita a seus objetivos.  
8.3. Na máxima extensão permitida pela lei, não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso do App.

## 9. Encerramento

9.1. Você pode encerrar o uso do App a qualquer momento, excluindo sua conta conforme instruções no próprio App ou via suporte.  
9.2. Podemos encerrar ou suspender o acesso em caso de violação destes Termos, fraude ou exigência legal.

## 10. Alterações

10.1. Estes Termos podem ser atualizados periodicamente.  
10.2. Quando houver mudanças relevantes, avisaremos pelo App ou por e-mail. O uso continuado após as alterações significa que você concorda com os novos Termos.

## 11. Contato

11.1. Em caso de dúvidas sobre estes Termos, entre em contato:  
- E-mail: contato@crossfit889.com.br`;

const CANCELLATION_MD = `# Política de Cancelamento e Assinaturas

Última atualização: 2026-02-03

Esta Política de Cancelamento descreve como funcionam assinaturas, renovação e cancelamento de planos vinculados ao aplicativo CrossFit889 ("App").

## 1. Assinaturas e renovação

1.1. O App pode oferecer planos pagos com benefícios adicionais ("Assinaturas").  
1.2. A contratação, o pagamento e a renovação dos planos são realizados **na recepção da academia CrossFit889**.  
1.3. O valor, a periodicidade e as formas de pagamento aceitas são informados na recepção no momento da contratação.

## 2. Cobrança

2.1. As cobranças são feitas **diretamente na recepção da academia**. O App não processa pagamentos nem armazena dados de cartão ou meio de pagamento.  
2.2. Para renovar ou regularizar sua assinatura, dirija-se à recepção da CrossFit889 dentro do prazo combinado.

## 3. Como cancelar

3.1. O cancelamento da assinatura deve ser solicitado **na recepção da academia** ou por contato oficial (whatsapp ou e-mail).  
3.2. Em geral, o cancelamento impede **renovações futuras**, e você mantém acesso ao plano até o final do período já pago.  

## 4. Reembolsos

4.1. Solicitações de reembolso devem ser tratadas **diretamente com a recepção da academia** ou com o suporte oficial da CrossFit889, conforme a política da unidade.  
4.2. O App não processa cobranças e, portanto, não realiza reembolsos. Qualquer valor pago na recepção segue as regras combinadas no ato da contratação.  
4.3. Em caso de cobrança indevida ou dúvida sobre pagamentos, entre em contato com a recepção ou com o suporte: contato@crossfit889.com.br.

## 5. Alterações de preço ou plano

5.1. Preços, benefícios e estrutura de planos podem ser ajustados. Alterações são comunicadas pela academia (recepção, App ou e-mail), sempre que possível antes da próxima renovação.  
5.2. Se você não concordar com as mudanças, pode cancelar a renovação na recepção antes do próximo pagamento.

## 6. Encerramento de conta

6.1. O cancelamento da assinatura **não exclui automaticamente sua conta** no App nem seus dados.  
6.2. Você pode solicitar exclusão de conta e dados conforme descrito na Política de Privacidade.  
6.3. Após a exclusão da conta, dados essenciais podem ser mantidos apenas quando necessário para obrigações legais ou contábeis.

## 7. Contato

7.1. Para dúvidas sobre assinaturas, pagamentos ou cancelamentos:  
- **Recepção da academia** (presencialmente ou pelo canal informado na unidade)  
- E-mail: contato@crossfit889.com.br`;

const DOCS = [
  { id: "privacidade", title: "Política de Privacidade", content: PRIVACY_MD },
  { id: "termos", title: "Termos de Uso", content: TERMS_MD },
  { id: "cancelamento", title: "Política de Cancelamento", content: CANCELLATION_MD },
];

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-cf-darker">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-cf-orange text-sm uppercase tracking-wider mb-10 transition-colors"
          >
            <ChevronLeft size={18} />
            Voltar ao site
          </Link>

          <h1 className="font-display font-bold text-3xl md:text-4xl uppercase text-white mb-8">
            Termos e Políticas
          </h1>

          <nav className="flex flex-wrap gap-4 mb-16 text-sm">
            <a
              href="#privacidade"
              className="text-white/60 hover:text-cf-orange uppercase tracking-wider transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#termos"
              className="text-white/60 hover:text-cf-orange uppercase tracking-wider transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#cancelamento"
              className="text-white/60 hover:text-cf-orange uppercase tracking-wider transition-colors"
            >
              Política de Cancelamento
            </a>
          </nav>

          <div className="space-y-20">
            {DOCS.map((doc) => (
              <article
                key={doc.id}
                id={doc.id}
                className="scroll-mt-28"
              >
                <div className="prose prose-invert prose-cf max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-cf-orange mb-6 mt-0">
                          {children}
                        </h2>
                      ),
                      h2: ({ children }) => (
                        <h3 className="font-display font-bold text-xl uppercase text-white mt-8 mb-4">
                          {children}
                        </h3>
                      ),
                      h3: ({ children }) => (
                        <h4 className="font-display font-semibold text-lg uppercase text-white/90 mt-6 mb-3">
                          {children}
                        </h4>
                      ),
                      p: ({ children }) => (
                        <p className="text-white/70 leading-relaxed mb-4">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-none space-y-2 mb-4 pl-0">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="flex items-start gap-2 text-white/70">
                          <span className="text-cf-orange shrink-0">•</span>
                          <span>{children}</span>
                        </li>
                      ),
                    }}
                  >
                    {doc.content}
                  </ReactMarkdown>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-cf-orange text-sm uppercase tracking-wider transition-colors"
            >
              <ChevronLeft size={18} />
              Voltar ao site
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
