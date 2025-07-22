export interface Flashcard {
  id: number;
  question: string;
  answer: string;
}

export interface Subject {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  cards: Flashcard[];
}

export const subjects: Subject[] = [
  {
    id: "portugues",
    name: "Língua Portuguesa",
    color: "from-blue-500 to-purple-600",
    icon: "📚",
    description: "65 questões",
    cards: [
      {
        id: 1,
        question: "O que é um texto dissertativo?",
        answer: "É um texto que apresenta uma opinião ou argumento sobre um tema."
      },
      {
        id: 2,
        question: "Qual é o objetivo de um texto narrativo?",
        answer: "Contar uma história com personagens, tempo e espaço definidos."
      },
      {
        id: 3,
        question: "Qual é a função do pronome relativo?",
        answer: "Substituir um termo anterior e iniciar uma oração subordinada."
      },
      {
        id: 4,
        question: "O que é coesão textual?",
        answer: "É a conexão entre as partes de um texto para garantir continuidade."
      },
      {
        id: 5,
        question: "O que é coerência textual?",
        answer: "É a lógica e o sentido do texto como um todo."
      },
      {
        id: 6,
        question: "Qual a diferença entre parônimos e homônimos?",
        answer: "Parônimos têm escrita e som parecidos; homônimos têm som igual."
      },
      {
        id: 7,
        question: "O que são pronomes átonos?",
        answer: "São pronomes que não têm tonicidade própria (me, te, se, nos...)."
      },
      {
        id: 8,
        question: "O que é regência verbal?",
        answer: "É a relação entre um verbo e os termos que o completam."
      },
      {
        id: 9,
        question: "Quando se usa o ponto e vírgula?",
        answer: "Para separar orações com certa independência ou itens complexos em lista."
      },
      {
        id: 10,
        question: "Qual é a função da vírgula?",
        answer: "Separar elementos, orações e indicar pausas no texto."
      },
      {
        id: 11,
        question: "O que é uma oração subordinada?",
        answer: "É uma oração que depende de outra para ter sentido completo."
      },
      {
        id: 12,
        question: "O que é uma oração coordenada?",
        answer: "É uma oração que tem sentido completo e se liga a outra."
      },
      {
        id: 13,
        question: "Qual é a diferença entre oração e período?",
        answer: "Oração tem verbo; período é uma ou mais orações completas."
      },
      {
        id: 14,
        question: "Quando se usa crase?",
        answer: "Quando ocorre a fusão da preposição \"a\" com o artigo definido \"a\"."
      },
      {
        id: 15,
        question: "O que é colocação pronominal?",
        answer: "É a posição dos pronomes oblíquos em relação ao verbo."
      },
      {
        id: 16,
        question: "O que é ambiguidade?",
        answer: "É a duplicidade de sentido numa frase."
      },
      {
        id: 17,
        question: "O que é verbo de ligação?",
        answer: "É o verbo que liga o sujeito a uma característica (ex: ser, estar)."
      },
      {
        id: 18,
        question: "Qual é a função do sujeito oculto?",
        answer: "É aquele que não aparece na oração, mas é identificado pelo contexto."
      },
      {
        id: 19,
        question: "Qual é o sujeito indeterminado?",
        answer: "É aquele que não se sabe ou não se quer identificar."
      },
      {
        id: 20,
        question: "O que é frase?",
        answer: "Enunciado com sentido completo, podendo ou não ter verbo."
      },
      {
        id: 21,
        question: "O que é uma oração reduzida?",
        answer: "É uma oração subordinada que não se inicia por conjunção."
      },
      {
        id: 22,
        question: "Como se identifica a voz passiva?",
        answer: "O sujeito recebe a ação verbal."
      },
      {
        id: 23,
        question: "O que é um predicado verbal?",
        answer: "É aquele cujo núcleo é um verbo de ação."
      },
      {
        id: 24,
        question: "O que é um predicado nominal?",
        answer: "É aquele cujo núcleo é um nome (estado ou característica do sujeito)."
      },
      {
        id: 25,
        question: "O que é um predicado verbo-nominal?",
        answer: "É aquele que possui dois núcleos: um verbo e um nome."
      },
      {
        id: 26,
        question: "Qual é a estrutura básica da oração?",
        answer: "Sujeito + verbo + complementos."
      },
      {
        id: 27,
        question: "O que é a norma culta da língua?",
        answer: "É a forma gramaticalmente correta, usada em contextos formais."
      },
      {
        id: 28,
        question: "O que é o Manual da Presidência da República?",
        answer: "É o guia oficial de redação para órgãos públicos."
      },
      {
        id: 29,
        question: "Qual é o objetivo da redação oficial?",
        answer: "Clareza, concisão, formalidade e impessoalidade."
      },
      {
        id: 30,
        question: "Como deve ser a linguagem da redação oficial?",
        answer: "Impessoal, clara e objetiva."
      },
      {
        id: 31,
        question: "O que é paralelismo sintático?",
        answer: "É a simetria na estrutura das frases."
      },
      {
        id: 32,
        question: "O que é substituição lexical?",
        answer: "Trocar uma palavra por sinônimo ou termo equivalente."
      },
      {
        id: 33,
        question: "O que é uma anáfora?",
        answer: "Referência a um termo anterior no texto."
      },
      {
        id: 34,
        question: "O que é catáfora?",
        answer: "Referência a um termo que ainda será mencionado."
      },
      {
        id: 35,
        question: "O que é coesão referencial?",
        answer: "É a retomada de ideias ou termos no texto."
      },
      {
        id: 36,
        question: "O que é coesão sequencial?",
        answer: "É a organização lógica entre as partes do texto."
      },
      {
        id: 37,
        question: "Qual é a diferença entre linguagem denotativa e conotativa?",
        answer: "Denotativa é literal; conotativa é figurada."
      },
      {
        id: 38,
        question: "Quando se usa ponto final?",
        answer: "Para encerrar uma oração declarativa."
      },
      {
        id: 39,
        question: "O que indica o ponto de interrogação?",
        answer: "Uma pergunta direta."
      },
      {
        id: 40,
        question: "Quando se usa reticências?",
        answer: "Para indicar interrupção ou continuação de ideia."
      },
      {
        id: 41,
        question: "Quando se usa os dois-pontos?",
        answer: "Antes de uma explicação ou citação."
      },
      {
        id: 42,
        question: "Como se caracteriza a linguagem formal?",
        answer: "Regras gramaticais, vocabulário técnico, sem gírias."
      },
      {
        id: 43,
        question: "Qual o papel do sujeito composto?",
        answer: "Dois ou mais núcleos realizando a ação verbal."
      },
      {
        id: 44,
        question: "O que é tempo verbal?",
        answer: "Indica quando a ação verbal acontece."
      },
      {
        id: 45,
        question: "O que é modo verbal?",
        answer: "Expressa a atitude do falante (indicativo, subjuntivo, imperativo)."
      },
      {
        id: 46,
        question: "O que é um verbo irregular?",
        answer: "É aquele que não segue o modelo padrão de conjugação."
      },
      {
        id: 47,
        question: "O que é verbo transitivo?",
        answer: "É o verbo que exige complemento (objeto direto ou indireto)."
      },
      {
        id: 48,
        question: "O que é verbo intransitivo?",
        answer: "Não exige complemento."
      },
      {
        id: 49,
        question: "Qual a diferença entre adjunto e complemento?",
        answer: "Adjunto acrescenta; complemento é necessário."
      },
      {
        id: 50,
        question: "O que é predicativo do sujeito?",
        answer: "É a característica atribuída ao sujeito por meio do verbo de ligação."
      },
      {
        id: 51,
        question: "O que é sujeito elíptico?",
        answer: "Sujeito que não aparece, mas é identificado pelo contexto."
      },
      {
        id: 52,
        question: "O que é período composto?",
        answer: "Frase com duas ou mais orações."
      },
      {
        id: 53,
        question: "O que é conjunção?",
        answer: "Palavra que liga orações ou termos semelhantes."
      },
      {
        id: 54,
        question: "O que são interjeições?",
        answer: "Palavras que expressam emoções ou sentimentos."
      },
      {
        id: 55,
        question: "O que é um advérbio?",
        answer: "Palavra que modifica verbo, adjetivo ou outro advérbio."
      },
      {
        id: 56,
        question: "O que é uma preposição?",
        answer: "Palavra que liga dois termos estabelecendo relação entre eles."
      },
      {
        id: 57,
        question: "O que é locução verbal?",
        answer: "Conjunto de dois ou mais verbos com valor de um só."
      },
      {
        id: 58,
        question: "Qual a diferença entre \"por que\" e \"porque\"?",
        answer: "\"Por que\" é usado em perguntas; \"porque\" em respostas."
      },
      {
        id: 59,
        question: "O que é sujeito inexistente?",
        answer: "Quando o verbo é impessoal (ex: \"faz frio\")."
      },
      {
        id: 60,
        question: "O que é polissemia?",
        answer: "Quando uma palavra tem vários significados."
      },
      {
        id: 61,
        question: "O que é denotação?",
        answer: "Uso literal da linguagem."
      },
      {
        id: 62,
        question: "O que é conotação?",
        answer: "Uso figurado da linguagem."
      },
      {
        id: 63,
        question: "Qual é a função da coesão lexical?",
        answer: "Evitar repetições, usando sinônimos ou expressões equivalentes."
      },
      {
        id: 64,
        question: "O que é sentido figurado?",
        answer: "Quando a palavra é usada fora do seu sentido comum."
      },
      {
        id: 65,
        question: "O que é predicado e qual sua função dentro da oração?",
        answer: "É tudo que se declara sobre o sujeito, contendo o verbo e seus complementos."
      }
    ]
  },
  {
    id: "informatica",
    name: "Noções de Informática",
    color: "from-green-500 to-blue-600",
    icon: "💻",
    description: "65 questões",
    cards: [
      {
        id: 1,
        question: "O que é hardware?",
        answer: "Parte física do computador."
      },
      {
        id: 2,
        question: "O que é software?",
        answer: "Conjunto de programas e sistemas usados no computador."
      },
      {
        id: 3,
        question: "Qual é a função do sistema operacional?",
        answer: "Gerenciar os recursos do computador."
      },
      {
        id: 4,
        question: "O que é o Windows 10?",
        answer: "Sistema operacional da Microsoft."
      },
      {
        id: 5,
        question: "Qual é o atalho para copiar no Windows?",
        answer: "Ctrl + C."
      },
      {
        id: 6,
        question: "Qual é o atalho para colar no Windows?",
        answer: "Ctrl + V."
      },
      {
        id: 7,
        question: "O que é um antivírus?",
        answer: "Programa que protege o computador contra ameaças."
      },
      {
        id: 8,
        question: "Para que serve um firewall?",
        answer: "Controlar o tráfego de dados entre redes."
      },
      {
        id: 9,
        question: "O que é rede de computadores?",
        answer: "Conjunto de dispositivos conectados para trocar informações."
      },
      {
        id: 10,
        question: "O que é uma LAN?",
        answer: "Rede local, usada em espaços pequenos (ex: escritório)."
      },
      {
        id: 11,
        question: "O que é uma WAN?",
        answer: "Rede de longa distância (ex: internet)."
      },
      {
        id: 12,
        question: "O que é endereço IP?",
        answer: "Identificação numérica de um dispositivo em uma rede."
      },
      {
        id: 13,
        question: "Para que serve o navegador?",
        answer: "Acessar páginas da internet."
      },
      {
        id: 14,
        question: "Exemplo de navegador de internet:",
        answer: "Google Chrome."
      },
      {
        id: 15,
        question: "O que é URL?",
        answer: "Endereço de um site na internet."
      },
      {
        id: 16,
        question: "O que é phishing?",
        answer: "Golpe digital para roubar dados."
      },
      {
        id: 17,
        question: "O que é backup?",
        answer: "Cópia de segurança dos dados."
      },
      {
        id: 18,
        question: "O que é um pendrive?",
        answer: "Dispositivo portátil de armazenamento."
      },
      {
        id: 19,
        question: "Para que serve o Microsoft Word?",
        answer: "Criar e editar textos."
      },
      {
        id: 20,
        question: "Qual é a extensão padrão do Word?",
        answer: ".docx"
      },
      {
        id: 21,
        question: "Para que serve o Microsoft Excel?",
        answer: "Criar planilhas e fazer cálculos."
      },
      {
        id: 22,
        question: "O que é uma célula no Excel?",
        answer: "Interseção entre linha e coluna."
      },
      {
        id: 23,
        question: "Como iniciar uma fórmula no Excel?",
        answer: "Com sinal de igual (=)."
      },
      {
        id: 24,
        question: "O que faz a função SOMA no Excel?",
        answer: "Soma valores numéricos."
      },
      {
        id: 25,
        question: "Para que serve o PowerPoint?",
        answer: "Criar apresentações de slides."
      },
      {
        id: 26,
        question: "O que é o LibreOffice?",
        answer: "Pacote de escritório gratuito."
      },
      {
        id: 27,
        question: "O que é o Google Workspace?",
        answer: "Conjunto de ferramentas Google para produtividade."
      },
      {
        id: 28,
        question: "Exemplos do Google Workspace:",
        answer: "Gmail, Drive, Docs, Sheets."
      },
      {
        id: 29,
        question: "O que é o Google Docs?",
        answer: "Editor de texto online."
      },
      {
        id: 30,
        question: "Para que serve o Google Sheets?",
        answer: "Planilhas online."
      },
      {
        id: 31,
        question: "O que é computação em nuvem?",
        answer: "Uso de dados e programas pela internet."
      },
      {
        id: 32,
        question: "Vantagem da nuvem:",
        answer: "Acesso remoto a arquivos."
      },
      {
        id: 33,
        question: "O que é um dado?",
        answer: "Informação bruta, sem tratamento."
      },
      {
        id: 34,
        question: "O que é uma informação?",
        answer: "Dado tratado e útil."
      },
      {
        id: 35,
        question: "O que é banco de dados?",
        answer: "Conjunto organizado de dados."
      },
      {
        id: 36,
        question: "O que é BI (Business Intelligence)?",
        answer: "Análise de dados para decisões estratégicas."
      },
      {
        id: 37,
        question: "O que é um arquivo?",
        answer: "Conjunto de dados armazenado."
      },
      {
        id: 38,
        question: "O que é um drive?",
        answer: "Dispositivo de armazenamento (ex: HD, SSD)."
      },
      {
        id: 39,
        question: "O que é um atalho?",
        answer: "Caminho rápido para acessar programas."
      },
      {
        id: 40,
        question: "O que é formatação de texto?",
        answer: "Alteração de aparência do texto (fonte, cor etc.)."
      },
      {
        id: 41,
        question: "O que é planilha eletrônica?",
        answer: "Arquivo com linhas e colunas para cálculos."
      },
      {
        id: 42,
        question: "O que são métricas em dados?",
        answer: "Unidades de medida para análise."
      },
      {
        id: 43,
        question: "O que é a transformação de dados?",
        answer: "Conversão de dados brutos em úteis."
      },
      {
        id: 44,
        question: "O que é análise de dados?",
        answer: "Processo de interpretação de dados."
      },
      {
        id: 45,
        question: "Para que serve o Power BI?",
        answer: "Ferramenta de visualização de dados."
      },
      {
        id: 46,
        question: "O que é segurança da informação?",
        answer: "Proteção dos dados contra acesso indevido."
      },
      {
        id: 47,
        question: "O que é senha forte?",
        answer: "Senha com letras, números e símbolos."
      },
      {
        id: 48,
        question: "O que é criptografia?",
        answer: "Codificação de dados para segurança."
      },
      {
        id: 49,
        question: "O que é spam?",
        answer: "Mensagem eletrônica indesejada."
      },
      {
        id: 50,
        question: "O que é o CADIN?",
        answer: "Cadastro de inadimplentes do setor público."
      },
      {
        id: 51,
        question: "O que é sistema operacional?",
        answer: "Programa que gerencia o hardware e softwares do computador."
      },
      {
        id: 52,
        question: "O que é pasta (diretório)?",
        answer: "Local onde arquivos são armazenados."
      },
      {
        id: 53,
        question: "Qual a função do atalho Ctrl + Z?",
        answer: "Desfazer a última ação."
      },
      {
        id: 54,
        question: "O que é cloud computing?",
        answer: "Computação baseada em serviços online."
      },
      {
        id: 55,
        question: "O que é formatação de disco?",
        answer: "Preparação do disco rígido para receber dados."
      },
      {
        id: 56,
        question: "O que é malware?",
        answer: "Programa malicioso criado para prejudicar o sistema."
      },
      {
        id: 57,
        question: "O que é spyware?",
        answer: "Programa espião que coleta dados do usuário."
      },
      {
        id: 58,
        question: "O que é download?",
        answer: "Ação de transferir arquivos da internet para o computador."
      },
      {
        id: 59,
        question: "O que é upload?",
        answer: "Enviar arquivos do computador para a internet."
      },
      {
        id: 60,
        question: "O que é navegador padrão?",
        answer: "Navegador usado automaticamente pelo sistema."
      },
      {
        id: 61,
        question: "O que é cookies?",
        answer: "Arquivos que armazenam informações do usuário em sites."
      },
      {
        id: 62,
        question: "O que é cache?",
        answer: "Memória usada para armazenar dados temporários."
      },
      {
        id: 63,
        question: "O que é drive C:?",
        answer: "Partição principal do sistema no Windows."
      },
      {
        id: 64,
        question: "O que é o atalho Ctrl + P?",
        answer: "Imprimir o documento atual."
      },
      {
        id: 65,
        question: "Qual a diferença entre software livre e software proprietário?",
        answer: "O livre permite modificação e redistribuição; o proprietário não."
      }
    ]
  },
  {
    id: "raciocinio",
    name: "Raciocínio Lógico",
    color: "from-purple-500 to-pink-600",
    icon: "🧮",
    description: "40 questões",
    cards: [
      {
        id: 1,
        question: "O que é uma proposição?",
        answer: "É uma frase que pode ser verdadeira ou falsa."
      },
      {
        id: 2,
        question: "O que é uma proposição simples?",
        answer: "Aquela com apenas uma ideia."
      },
      {
        id: 3,
        question: "O que é uma proposição composta?",
        answer: "Aquela formada por duas ou mais proposições simples."
      },
      {
        id: 4,
        question: "Qual é o símbolo da conjunção (e)?",
        answer: "∧"
      },
      {
        id: 5,
        question: "Qual é o símbolo da disjunção (ou)?",
        answer: "∨"
      },
      {
        id: 6,
        question: "Qual é o símbolo da condicional (se... então)?",
        answer: "→"
      },
      {
        id: 7,
        question: "Qual é o símbolo da bicondicional (se e somente se)?",
        answer: "↔"
      },
      {
        id: 8,
        question: "O que é negação de uma proposição?",
        answer: "É a afirmação contrária."
      },
      {
        id: 9,
        question: "Negação de \"João estuda\":",
        answer: "\"João não estuda.\""
      },
      {
        id: 10,
        question: "Qual é o valor lógico da conjunção verdadeira?",
        answer: "Somente se as duas forem verdadeiras."
      },
      {
        id: 11,
        question: "Como funciona a disjunção?",
        answer: "É falsa apenas se as duas forem falsas."
      },
      {
        id: 12,
        question: "O que é argumento válido?",
        answer: "Quando a conclusão é consequência das premissas."
      },
      {
        id: 13,
        question: "O que é tabela-verdade?",
        answer: "Tabela que mostra todos os valores lógicos possíveis."
      },
      {
        id: 14,
        question: "O que é equivalência lógica?",
        answer: "Duas proposições com o mesmo valor lógico."
      },
      {
        id: 15,
        question: "Equivalente de \"Se A, então B\":",
        answer: "\"Se não B, então não A.\""
      },
      {
        id: 16,
        question: "O que é uma inferência lógica?",
        answer: "Conclusão baseada em premissas."
      },
      {
        id: 17,
        question: "O que é silogismo?",
        answer: "Raciocínio com duas premissas e uma conclusão."
      },
      {
        id: 18,
        question: "O que é o princípio da não contradição?",
        answer: "Uma proposição não pode ser verdadeira e falsa ao mesmo tempo."
      },
      {
        id: 19,
        question: "O que é conjunto?",
        answer: "Coleção de elementos."
      },
      {
        id: 20,
        question: "Símbolo de inclusão (pertence):",
        answer: "∈"
      },
      {
        id: 21,
        question: "O que é interseção de conjuntos?",
        answer: "Elementos comuns a dois conjuntos."
      },
      {
        id: 22,
        question: "O que é união de conjuntos?",
        answer: "Todos os elementos de dois conjuntos."
      },
      {
        id: 23,
        question: "O que é subconjunto?",
        answer: "Conjunto cujos elementos estão em outro."
      },
      {
        id: 24,
        question: "O que é matriz?",
        answer: "Tabela de números dispostos em linhas e colunas."
      },
      {
        id: 25,
        question: "O que é sequência lógica?",
        answer: "Ordem lógica entre elementos ou números."
      },
      {
        id: 26,
        question: "O que é proposição verdadeira?",
        answer: "Aquela que corresponde à realidade ou lógica."
      },
      {
        id: 27,
        question: "O que é proposição falsa?",
        answer: "Aquela que não corresponde à realidade."
      },
      {
        id: 28,
        question: "O que é o valor lógico de uma proposição?",
        answer: "Indicação se é verdadeira (V) ou falsa (F)."
      },
      {
        id: 29,
        question: "O que é tabela verdade da condicional?",
        answer: "É falsa apenas se o antecedente for verdadeiro e o consequente, falso."
      },
      {
        id: 30,
        question: "O que é negação da conjunção (p ∧ q)?",
        answer: "¬p ∨ ¬q."
      },
      {
        id: 31,
        question: "O que é diagrama de Venn?",
        answer: "Representação visual de conjuntos."
      },
      {
        id: 32,
        question: "O que é conjunto universo?",
        answer: "Conjunto que contém todos os elementos possíveis."
      },
      {
        id: 33,
        question: "O que é complemento de um conjunto?",
        answer: "Elementos do universo que não pertencem ao conjunto."
      },
      {
        id: 34,
        question: "O que é raciocínio dedutivo?",
        answer: "Parte do geral para o particular."
      },
      {
        id: 35,
        question: "O que é raciocínio indutivo?",
        answer: "Parte do particular para o geral."
      },
      {
        id: 36,
        question: "O que é a lógica formal?",
        answer: "Estudo das formas de raciocínio válidas."
      },
      {
        id: 37,
        question: "O que é negação da disjunção (p ∨ q)?",
        answer: "¬p ∧ ¬q."
      },
      {
        id: 38,
        question: "O que é equivalência lógica da bicondicional?",
        answer: "(p → q) ∧ (q → p)."
      },
      {
        id: 39,
        question: "O que é sequência numérica?",
        answer: "Conjunto de números com padrão ou lógica."
      },
      {
        id: 40,
        question: "O que é lógica de argumentação?",
        answer: "Organização de ideias para demonstrar uma conclusão."
      }
    ]
  },
  {
    id: "etica",
    name: "Ética na Administração Pública",
    color: "from-yellow-500 to-orange-600",
    icon: "⚖️",
    description: "40 questões",
    cards: [
      {
        id: 1,
        question: "O que é ética?",
        answer: "Conjunto de valores e princípios que regem o comportamento humano."
      },
      {
        id: 2,
        question: "O que é moral?",
        answer: "Conjunto de regras sociais seguidas por um grupo."
      },
      {
        id: 3,
        question: "Qual é o foco da ética pública?",
        answer: "Interesse coletivo."
      },
      {
        id: 4,
        question: "O que é ética no setor público?",
        answer: "Atuação conforme princípios legais e morais."
      },
      {
        id: 5,
        question: "Qual é o papel do servidor público?",
        answer: "Servir à sociedade com responsabilidade e honestidade."
      },
      {
        id: 6,
        question: "O que é improbidade administrativa?",
        answer: "Ato ilegal ou imoral cometido por agente público."
      },
      {
        id: 7,
        question: "Lei que trata da improbidade administrativa:",
        answer: "Lei nº 8.429/1992."
      },
      {
        id: 8,
        question: "O que são atos de improbidade?",
        answer: "Enriquecimento ilícito, dano ao erário e violação de princípios."
      },
      {
        id: 9,
        question: "Servidor público pode ter privilégio?",
        answer: "Não, deve atuar com isonomia."
      },
      {
        id: 10,
        question: "O que é interesse público?",
        answer: "Aquilo que atende ao bem coletivo."
      },
      {
        id: 11,
        question: "O que é transparência pública?",
        answer: "Acesso da sociedade às ações do governo."
      },
      {
        id: 12,
        question: "O que é conflito de interesses?",
        answer: "Quando o interesse pessoal afeta a decisão pública."
      },
      {
        id: 13,
        question: "Ética x Legalidade:",
        answer: "Algo legal pode não ser ético, e vice-versa."
      },
      {
        id: 14,
        question: "Princípios da ética pública:",
        answer: "Legalidade, moralidade, impessoalidade, publicidade e eficiência."
      },
      {
        id: 15,
        question: "A quem se aplica o Código de Ética?",
        answer: "A todos os servidores e empregados públicos."
      },
      {
        id: 16,
        question: "O que é zelo pelo patrimônio público?",
        answer: "Cuidar dos bens do povo como se fossem próprios."
      },
      {
        id: 17,
        question: "O que é assiduidade no serviço público?",
        answer: "Comparecimento regular ao trabalho."
      },
      {
        id: 18,
        question: "O que é sigilo funcional?",
        answer: "Dever de não divulgar informações internas."
      },
      {
        id: 19,
        question: "Ética e democracia:",
        answer: "A ética fortalece a democracia."
      },
      {
        id: 20,
        question: "O que é o decoro no serviço público?",
        answer: "Conduta adequada ao cargo ocupado."
      },
      {
        id: 21,
        question: "O que é cortesia no serviço público?",
        answer: "Tratar todos com respeito."
      },
      {
        id: 22,
        question: "Qual o papel da ouvidoria pública?",
        answer: "Receber sugestões, reclamações e elogios dos cidadãos."
      },
      {
        id: 23,
        question: "O que é respeito à hierarquia?",
        answer: "Obedecer normas e superiores sem violar a ética."
      },
      {
        id: 24,
        question: "O que é desvio de função?",
        answer: "Quando o servidor exerce atividade fora do cargo."
      },
      {
        id: 25,
        question: "A ética deve ser constante ou ocasional?",
        answer: "Constante."
      },
      {
        id: 26,
        question: "O que é ética profissional?",
        answer: "Conjunto de princípios que orienta o comportamento no trabalho."
      },
      {
        id: 27,
        question: "O que é sigilo funcional?",
        answer: "Dever de não divulgar informações internas do órgão."
      },
      {
        id: 28,
        question: "O que é decoro?",
        answer: "Postura respeitosa e compatível com o cargo."
      },
      {
        id: 29,
        question: "O que é imparcialidade?",
        answer: "Atuar sem favorecer ou prejudicar ninguém."
      },
      {
        id: 30,
        question: "O que é honestidade no serviço público?",
        answer: "Agir com verdade e integridade."
      },
      {
        id: 31,
        question: "O que é probidade?",
        answer: "Honestidade e retidão na conduta."
      },
      {
        id: 32,
        question: "O que é respeito ao bem comum?",
        answer: "Priorizar o interesse coletivo."
      },
      {
        id: 33,
        question: "O que é pontualidade?",
        answer: "Cumprimento de horários estabelecidos."
      },
      {
        id: 34,
        question: "O que é urbanidade?",
        answer: "Tratar as pessoas com educação e cortesia."
      },
      {
        id: 35,
        question: "O que é o Código de Ética do Servidor Público?",
        answer: "Conjunto de normas de conduta para os servidores."
      },
      {
        id: 36,
        question: "O que é zelo pela coisa pública?",
        answer: "Cuidado com os bens e recursos públicos."
      },
      {
        id: 37,
        question: "O que é dever funcional?",
        answer: "Obrigações do servidor no exercício do cargo."
      },
      {
        id: 38,
        question: "O que é comprometimento?",
        answer: "Dedicação às atividades e objetivos do órgão."
      },
      {
        id: 39,
        question: "O que é abuso de poder?",
        answer: "Uso indevido da autoridade para benefício próprio."
      },
      {
        id: 40,
        question: "O que é respeito ao bem comum?",
        answer: "Priorizar o interesse coletivo."
      }
    ]
  },
  {
    id: "administracao",
    name: "Administração Pública",
    color: "from-red-500 to-yellow-600",
    icon: "🏛️",
    description: "45 questões",
    cards: [
      {
        id: 1,
        question: "O que é administração direta?",
        answer: "É composta por órgãos ligados diretamente ao governo (União, estados, DF e municípios)."
      },
      {
        id: 2,
        question: "O que é administração indireta?",
        answer: "É formada por autarquias, fundações, empresas públicas e sociedades de economia mista."
      },
      {
        id: 3,
        question: "O que são autarquias?",
        answer: "Entidades com autonomia administrativa, criadas por lei."
      },
      {
        id: 4,
        question: "O que são fundações públicas?",
        answer: "Entidades criadas para fins sociais, culturais ou científicos."
      },
      {
        id: 5,
        question: "O que é descentralização?",
        answer: "Delegação de atividades do Estado a outras entidades."
      },
      {
        id: 6,
        question: "O que é desconcentração?",
        answer: "Distribuição de competências dentro do mesmo órgão."
      },
      {
        id: 7,
        question: "O que é o princípio da legalidade?",
        answer: "O servidor só pode fazer o que a lei permite."
      },
      {
        id: 8,
        question: "O que é impessoalidade?",
        answer: "A atuação deve ser sem favorecimentos pessoais."
      },
      {
        id: 9,
        question: "O que é publicidade?",
        answer: "Os atos devem ser transparentes."
      },
      {
        id: 10,
        question: "O que é eficiência?",
        answer: "Desempenho com qualidade, agilidade e menor custo."
      },
      {
        id: 11,
        question: "O que é moralidade administrativa?",
        answer: "Ação com base em princípios éticos."
      },
      {
        id: 12,
        question: "O que é licitação?",
        answer: "Processo para escolher a melhor proposta para a administração pública."
      },
      {
        id: 13,
        question: "O que é inexigibilidade?",
        answer: "Quando não há possibilidade de competição."
      },
      {
        id: 14,
        question: "Exemplo de inexigibilidade:",
        answer: "Contratação de artista consagrado."
      },
      {
        id: 15,
        question: "O que é dispensa de licitação?",
        answer: "Quando a lei autoriza não realizar licitação."
      },
      {
        id: 16,
        question: "O que é pregão?",
        answer: "Modalidade de licitação para aquisição de bens e serviços comuns."
      },
      {
        id: 17,
        question: "O que é concorrência?",
        answer: "Modalidade para contratos de maior valor."
      },
      {
        id: 18,
        question: "O que é convite?",
        answer: "Licitação com no mínimo três convidados."
      },
      {
        id: 19,
        question: "O que é o SICONV?",
        answer: "Sistema de convênios do governo federal."
      },
      {
        id: 20,
        question: "O que é o SICAF?",
        answer: "Sistema de cadastramento de fornecedores do governo."
      },
      {
        id: 21,
        question: "Para que serve o CADIN?",
        answer: "Registra inadimplentes perante órgãos públicos."
      },
      {
        id: 22,
        question: "O que é gestão por competência?",
        answer: "Aproveitamento de habilidades específicas dos servidores."
      },
      {
        id: 23,
        question: "O que é avaliação de desempenho?",
        answer: "Avaliação do rendimento e comportamento no serviço."
      },
      {
        id: 24,
        question: "O que é planejamento estratégico?",
        answer: "Definição de objetivos e metas para longo prazo."
      },
      {
        id: 25,
        question: "O que é o princípio da economicidade?",
        answer: "Uso racional dos recursos públicos."
      },
      {
        id: 26,
        question: "O que é ato administrativo?",
        answer: "Manifestação da vontade da Administração Pública."
      },
      {
        id: 27,
        question: "Quais os elementos do ato administrativo?",
        answer: "Competência, finalidade, forma, motivo e objeto."
      },
      {
        id: 28,
        question: "O que é controle da administração?",
        answer: "Verificação da legalidade e eficácia dos atos."
      },
      {
        id: 29,
        question: "O que é hierarquia administrativa?",
        answer: "Relação de subordinação entre os níveis da administração."
      },
      {
        id: 30,
        question: "Qual o papel da transparência pública?",
        answer: "Permitir o controle social sobre os atos da gestão."
      },
      {
        id: 31,
        question: "O que é serviço público?",
        answer: "Atividade prestada pelo Estado à população."
      },
      {
        id: 32,
        question: "O que é interesse público primário?",
        answer: "Interesse da coletividade."
      },
      {
        id: 33,
        question: "O que é interesse público secundário?",
        answer: "Interesse da Administração."
      },
      {
        id: 34,
        question: "O que é controle interno?",
        answer: "Fiscalização feita pela própria administração."
      },
      {
        id: 35,
        question: "O que é controle externo?",
        answer: "Fiscalização feita pelo Legislativo, com ajuda do TCU."
      },
      {
        id: 36,
        question: "O que é eficiência administrativa?",
        answer: "Alcançar resultados com menor gasto."
      },
      {
        id: 37,
        question: "O que é legalidade administrativa?",
        answer: "Agir conforme a lei."
      },
      {
        id: 38,
        question: "O que é finalidade do ato administrativo?",
        answer: "Atender ao interesse público."
      },
      {
        id: 39,
        question: "O que é poder discricionário?",
        answer: "Liberdade da administração dentro da lei."
      },
      {
        id: 40,
        question: "O que é poder vinculado?",
        answer: "Quando a lei determina exatamente como agir."
      },
      {
        id: 41,
        question: "O que é poder hierárquico?",
        answer: "Organização da estrutura administrativa."
      },
      {
        id: 42,
        question: "O que é poder disciplinar?",
        answer: "Aplicar sanções a servidores e contratados."
      },
      {
        id: 43,
        question: "O que é poder regulamentar?",
        answer: "Editar normas para execução da lei."
      },
      {
        id: 44,
        question: "O que é controle social?",
        answer: "Participação do cidadão na fiscalização do poder público."
      },
      {
        id: 45,
        question: "O que é servidor público?",
        answer: "Pessoa legalmente investida em cargo público."
      }
    ]
  },
  {
    id: "recursos",
    name: "Recursos Materiais",
    color: "from-indigo-500 to-purple-600",
    icon: "📦",
    description: "35 questões",
    cards: [
      {
        id: 1,
        question: "O que é material de consumo?",
        answer: "Aquele que se deteriora com o uso."
      },
      {
        id: 2,
        question: "O que é material permanente?",
        answer: "Bem com durabilidade superior a dois anos."
      },
      {
        id: 3,
        question: "O que é armazenagem?",
        answer: "Guarda adequada dos materiais."
      },
      {
        id: 4,
        question: "O que é inventário?",
        answer: "Levantamento físico dos materiais."
      },
      {
        id: 5,
        question: "O que é controle de estoque?",
        answer: "Acompanhamento das entradas e saídas dos materiais."
      },
      {
        id: 6,
        question: "O que é almoxarifado?",
        answer: "Local de guarda e distribuição dos materiais."
      },
      {
        id: 7,
        question: "O que é entrada de material?",
        answer: "Registro da chegada de produtos ao estoque."
      },
      {
        id: 8,
        question: "O que é conferência de material?",
        answer: "Verificação do produto recebido com o pedido."
      },
      {
        id: 9,
        question: "O que é baixa de material?",
        answer: "Retirada definitiva do estoque."
      },
      {
        id: 10,
        question: "O que é requisição de material?",
        answer: "Pedido formal de material ao almoxarifado."
      },
      {
        id: 11,
        question: "O que é cadastro de fornecedores?",
        answer: "Registro das empresas aptas a fornecer para o órgão."
      },
      {
        id: 12,
        question: "O que é licitação de compras?",
        answer: "Processo para aquisição de materiais."
      },
      {
        id: 13,
        question: "O que é obsolescência?",
        answer: "Quando um material perde utilidade com o tempo."
      },
      {
        id: 14,
        question: "O que é deterioração?",
        answer: "Degradação física do material."
      },
      {
        id: 15,
        question: "O que é ficha de controle de estoque?",
        answer: "Documento que registra movimentações do material."
      },
      {
        id: 16,
        question: "O que é estocagem?",
        answer: "Ação de guardar materiais."
      },
      {
        id: 17,
        question: "O que é estoque mínimo?",
        answer: "Quantidade mínima necessária para manter o funcionamento."
      },
      {
        id: 18,
        question: "O que é giro de estoque?",
        answer: "Frequência com que o material é utilizado."
      },
      {
        id: 19,
        question: "O que é sistema de inventário rotativo?",
        answer: "Contagem periódica por grupos de itens."
      },
      {
        id: 20,
        question: "Qual é a finalidade da gestão de materiais?",
        answer: "Evitar desperdícios e garantir eficiência."
      },
      {
        id: 21,
        question: "Qual a principal função da área de suprimentos em uma organização pública?",
        answer: "Garantir o abastecimento contínuo e adequado de materiais."
      },
      {
        id: 22,
        question: "O que é inventário patrimonial?",
        answer: "Levantamento detalhado dos bens móveis e imóveis de uma instituição."
      },
      {
        id: 23,
        question: "O que caracteriza o consumo racional de materiais?",
        answer: "Utilização consciente, evitando desperdícios e reduzindo custos."
      },
      {
        id: 24,
        question: "Diferença entre material de consumo e permanente segundo a IN nº 205/1988?",
        answer: "Consumo: uso imediato, duração < 2 anos. Permanente: durabilidade > 2 anos."
      },
      {
        id: 25,
        question: "Qual o objetivo da padronização de materiais?",
        answer: "Evitar variedade desnecessária, facilitar compras e controle de estoque."
      },
      {
        id: 26,
        question: "O que é curva ABC na gestão de materiais?",
        answer: "Classificação dos materiais segundo seu valor e importância."
      },
      {
        id: 27,
        question: "Como se define o estoque mínimo?",
        answer: "Quantidade mínima necessária para evitar a falta do item."
      },
      {
        id: 28,
        question: "O que significa PEPS e UEPS?",
        answer: "PEPS: Primeiro que Entra, Primeiro que Sai; UEPS: Último que Entra, Primeiro que Sai."
      },
      {
        id: 29,
        question: "O que é lead time em compras públicas?",
        answer: "Tempo entre a solicitação e o recebimento do material."
      },
      {
        id: 30,
        question: "Diferença entre armazenamento centralizado e descentralizado?",
        answer: "Centralizado: um local único; descentralizado: múltiplos pontos."
      },
      {
        id: 31,
        question: "Como é feito o controle de validade de materiais perecíveis?",
        answer: "Por registro de data e aplicação de métodos como PVPS (Primeiro que Vence, Primeiro que Sai)."
      },
      {
        id: 32,
        question: "Qual a importância do controle de perdas?",
        answer: "Reduz prejuízos e garante eficiência no uso dos recursos."
      },
      {
        id: 33,
        question: "O que é conferência qualitativa e quantitativa de materiais?",
        answer: "Avaliação de qualidade e quantidade dos materiais recebidos."
      },
      {
        id: 34,
        question: "O que é mapa de cotação?",
        answer: "Documento com comparação de preços de diferentes fornecedores."
      },
      {
        id: 35,
        question: "Como se define lote econômico de compras?",
        answer: "Quantidade ideal que equilibra custo de pedido e de armazenagem."
      }
    ]
  },
  {
    id: "arquivologia",
    name: "Arquivologia",
    color: "from-teal-500 to-green-600",
    icon: "🗃️",
    description: "35 questões",
    cards: [
      {
        id: 1,
        question: "O que é arquivologia?",
        answer: "Ciência que estuda os arquivos."
      },
      {
        id: 2,
        question: "O que é arquivo?",
        answer: "Conjunto de documentos produzidos por uma instituição."
      },
      {
        id: 3,
        question: "O que é documento de arquivo?",
        answer: "Aquele produzido no exercício das atividades."
      },
      {
        id: 4,
        question: "O que é protocolo?",
        answer: "Setor que registra entrada e saída de documentos."
      },
      {
        id: 5,
        question: "O que é classificação documental?",
        answer: "Organização dos documentos conforme sua natureza."
      },
      {
        id: 6,
        question: "O que é tabela de temporalidade?",
        answer: "Define prazos de guarda e destinação dos documentos."
      },
      {
        id: 7,
        question: "O que é eliminação documental?",
        answer: "Descarte autorizado de documentos."
      },
      {
        id: 8,
        question: "O que é preservação?",
        answer: "Conjunto de medidas para evitar a deterioração."
      },
      {
        id: 9,
        question: "O que é conservação?",
        answer: "Ações preventivas para manter o documento utilizável."
      },
      {
        id: 10,
        question: "O que é restauração?",
        answer: "Reparação de danos em documentos."
      },
      {
        id: 11,
        question: "O que é fase corrente?",
        answer: "Fase em que o documento é frequentemente consultado."
      },
      {
        id: 12,
        question: "O que é fase intermediária?",
        answer: "Fase de pouca consulta, mas com valor."
      },
      {
        id: 13,
        question: "O que é fase permanente?",
        answer: "Fase em que o documento é guardado para sempre."
      },
      {
        id: 14,
        question: "O que é arquivo corrente?",
        answer: "Aquele usado nas atividades do dia a dia."
      },
      {
        id: 15,
        question: "O que é arquivo intermediário?",
        answer: "Aquele com pouca frequência de uso."
      },
      {
        id: 16,
        question: "O que é arquivo permanente?",
        answer: "Aquele com valor histórico."
      },
      {
        id: 17,
        question: "O que é digitalização de documentos?",
        answer: "Conversão de documentos físicos em arquivos digitais."
      },
      {
        id: 18,
        question: "Qual a função do SEI (Sistema Eletrônico de Informações)?",
        answer: "Gestão eletrônica de processos e documentos."
      },
      {
        id: 19,
        question: "O que é protocolo integrado?",
        answer: "Sistema que permite o rastreamento de documentos entre órgãos."
      },
      {
        id: 20,
        question: "O que é destinação final?",
        answer: "Decisão sobre guarda permanente ou eliminação."
      },
      {
        id: 21,
        question: "O que é fundo documental em Arquivologia?",
        answer: "Conjunto de documentos produzidos por uma mesma entidade."
      },
      {
        id: 22,
        question: "Qual o objetivo da tabela de temporalidade?",
        answer: "Estabelecer prazos de guarda e destinação dos documentos."
      },
      {
        id: 23,
        question: "O que caracteriza o arquivo corrente?",
        answer: "Conjunto de documentos em uso frequente."
      },
      {
        id: 24,
        question: "O que é avaliação documental?",
        answer: "Processo de análise para definir a destinação dos documentos."
      },
      {
        id: 25,
        question: "Qual a diferença entre protocolo e arquivo?",
        answer: "Protocolo registra e movimenta documentos; o arquivo conserva."
      },
      {
        id: 26,
        question: "O que é digitalização autenticada de documentos públicos?",
        answer: "Reproduzir com valor legal por meio de assinatura e certificação digital."
      },
      {
        id: 27,
        question: "O que é classificação funcional dos documentos?",
        answer: "Organização por função ou atividade do órgão produtor."
      },
      {
        id: 28,
        question: "O que é plano de classificação?",
        answer: "Estrutura hierárquica que organiza os documentos por assunto e atividade."
      },
      {
        id: 29,
        question: "O que são documentos intermediários?",
        answer: "Pouco utilizados, mas ainda com valor legal ou administrativo."
      },
      {
        id: 30,
        question: "Como diferenciar guarda permanente de guarda temporária?",
        answer: "Permanente: valor histórico; temporária: uso até vencer o prazo legal."
      },
      {
        id: 31,
        question: "O que é código de classificação?",
        answer: "Número que representa o assunto ou função de um documento."
      },
      {
        id: 32,
        question: "O que é arquivo morto?",
        answer: "Arquivo inativo, geralmente usado como sinônimo de arquivo intermediário."
      },
      {
        id: 33,
        question: "Diferença entre conservação e restauração de documentos?",
        answer: "Conservação: prevenção de danos; restauração: reparo após danos."
      },
      {
        id: 34,
        question: "Qual a finalidade da descrição documental?",
        answer: "Registrar e divulgar o conteúdo dos documentos arquivísticos."
      },
      {
        id: 35,
        question: "O que é destinação final de documentos?",
        answer: "Eliminação ou recolhimento para guarda permanente."
      }
    ]
  },
  {
    id: "contratos",
    name: "Gestão de Contratos",
    color: "from-pink-500 to-rose-600",
    icon: "📑",
    description: "35 questões",
    cards: [
      {
        id: 1,
        question: "O que é contrato administrativo?",
        answer: "Acordo entre a Administração Pública e terceiros."
      },
      {
        id: 2,
        question: "O que é edital?",
        answer: "Documento que regula uma licitação."
      },
      {
        id: 3,
        question: "O que é cláusula contratual?",
        answer: "Item que define direitos e deveres no contrato."
      },
      {
        id: 4,
        question: "O que é aditivo contratual?",
        answer: "Alteração posterior no contrato original."
      },
      {
        id: 5,
        question: "O que é vigência contratual?",
        answer: "Período em que o contrato está em validade."
      },
      {
        id: 6,
        question: "O que é execução contratual?",
        answer: "Cumprimento das obrigações do contrato."
      },
      {
        id: 7,
        question: "O que é fiscalização do contrato?",
        answer: "Acompanhamento pela Administração."
      },
      {
        id: 8,
        question: "O que é termo de referência?",
        answer: "Documento que define o objeto da contratação."
      },
      {
        id: 9,
        question: "O que é penalidade contratual?",
        answer: "Sanção aplicada ao contratado por descumprimento."
      },
      {
        id: 10,
        question: "O que é rescisão contratual?",
        answer: "Encerramento antecipado do contrato."
      },
      {
        id: 11,
        question: "Quem pode fiscalizar um contrato?",
        answer: "Servidor designado como fiscal de contrato."
      },
      {
        id: 12,
        question: "Qual a função do gestor de contrato?",
        answer: "Acompanhar a execução do contrato."
      },
      {
        id: 13,
        question: "O que é reajuste?",
        answer: "Correção do valor contratual."
      },
      {
        id: 14,
        question: "O que é repactuação?",
        answer: "Revisão dos valores por mudança nas condições."
      },
      {
        id: 15,
        question: "O que são encargos trabalhistas?",
        answer: "Obrigações legais com os empregados contratados."
      },
      {
        id: 16,
        question: "O que é conveniência administrativa?",
        answer: "Avaliação da utilidade de manter um contrato."
      },
      {
        id: 17,
        question: "Qual o papel do contratado?",
        answer: "Cumprir rigorosamente as cláusulas."
      },
      {
        id: 18,
        question: "O que é risco contratual?",
        answer: "Possibilidade de inadimplência ou falha no serviço."
      },
      {
        id: 19,
        question: "Qual é o papel da IN nº 5/2017?",
        answer: "Regula a contratação de serviços terceirizados."
      },
      {
        id: 20,
        question: "O que é fiscalização preventiva?",
        answer: "Monitoramento contínuo para evitar falhas."
      },
      {
        id: 21,
        question: "Qual o papel do fiscal de contrato na administração pública?",
        answer: "Acompanhar, fiscalizar e registrar a execução contratual."
      },
      {
        id: 22,
        question: "O que é cláusula penal em contrato administrativo?",
        answer: "Estabelece multa por descumprimento de obrigações contratuais."
      },
      {
        id: 23,
        question: "O que caracteriza o equilíbrio econômico-financeiro de um contrato?",
        answer: "Manutenção das condições iniciais acordadas no contrato."
      },
      {
        id: 24,
        question: "Quais são os tipos de contratos administrativos segundo a Lei nº 14.133/2021?",
        answer: "Obras, serviços, compras, locações, concessões, entre outros."
      },
      {
        id: 25,
        question: "O que é contrato de prestação continuada?",
        answer: "Aquele com execução prolongada no tempo, como limpeza ou vigilância."
      },
      {
        id: 26,
        question: "O que é termo aditivo?",
        answer: "Instrumento para alterar cláusulas do contrato vigente."
      },
      {
        id: 27,
        question: "O que é prorrogação contratual?",
        answer: "Extensão do prazo de vigência do contrato."
      },
      {
        id: 28,
        question: "O que é inadimplemento contratual?",
        answer: "Descumprimento parcial ou total das obrigações assumidas."
      },
      {
        id: 29,
        question: "O que caracteriza a rescisão contratual unilateral?",
        answer: "Quando a administração encerra o contrato por razões legais ou de interesse público."
      },
      {
        id: 30,
        question: "Quais são os documentos essenciais para formalização de contrato?",
        answer: "Edital, proposta, ata de julgamento, habilitação, termo de contrato."
      },
      {
        id: 31,
        question: "O que é cláusula de reajuste?",
        answer: "Prevê atualização dos valores conforme índices oficiais."
      },
      {
        id: 32,
        question: "Quando é cabível o uso de contrato emergencial?",
        answer: "Situações de urgência ou calamidade que exijam solução imediata."
      },
      {
        id: 33,
        question: "O que é subcontratação e quando é permitida?",
        answer: "Transferência parcial da execução; permitida com previsão contratual."
      },
      {
        id: 34,
        question: "Qual a função da matriz de risco contratual?",
        answer: "Distribuir responsabilidades por eventos imprevisíveis entre as partes."
      },
      {
        id: 35,
        question: "O que é glosa contratual?",
        answer: "Redução do valor pago por inadimplemento ou serviço não prestado."
      }
    ]
  },
  {
    id: "atualidades",
    name: "Atualidades",
    color: "from-cyan-500 to-blue-600",
    icon: "🌎",
    description: "35 questões",
    cards: [
      {
        id: 1,
        question: "O que é aquecimento global?",
        answer: "Aumento da temperatura média da Terra."
      },
      {
        id: 2,
        question: "O que é desmatamento?",
        answer: "Remoção da vegetação natural de forma irregular."
      },
      {
        id: 3,
        question: "O que é energia renovável?",
        answer: "Energia obtida de fontes naturais que se renovam."
      },
      {
        id: 4,
        question: "O que é inclusão digital?",
        answer: "Acesso igualitário às tecnologias."
      },
      {
        id: 5,
        question: "O que é inflação?",
        answer: "Aumento contínuo dos preços."
      },
      {
        id: 6,
        question: "O que é sustentabilidade?",
        answer: "Uso consciente dos recursos naturais."
      },
      {
        id: 7,
        question: "Qual o papel das vacinas na saúde pública?",
        answer: "Prevenção de doenças e epidemias."
      },
      {
        id: 8,
        question: "O que é inteligência artificial?",
        answer: "Tecnologia que simula a inteligência humana."
      },
      {
        id: 9,
        question: "O que são fake news?",
        answer: "Notícias falsas divulgadas como verdadeiras."
      },
      {
        id: 10,
        question: "O que é geopolítica?",
        answer: "Relação entre poder, território e influência internacional."
      },
      {
        id: 11,
        question: "O que é transição energética?",
        answer: "Substituição de fontes fósseis por energias renováveis."
      },
      {
        id: 12,
        question: "O que significa \"taxa Selic\" no contexto econômico?",
        answer: "Taxa básica de juros da economia brasileira."
      },
      {
        id: 13,
        question: "O que é inteligência artificial generativa?",
        answer: "Tecnologia que cria novos conteúdos com base em dados existentes."
      },
      {
        id: 14,
        question: "Qual a importância da COP nas discussões climáticas?",
        answer: "Conferência anual para tratar de mudanças climáticas globais."
      },
      {
        id: 15,
        question: "O que é a Reforma Tributária aprovada em 2023 no Brasil?",
        answer: "Unificação de tributos e criação do IVA (Imposto sobre Valor Agregado)."
      },
      {
        id: 16,
        question: "O que é polarização política?",
        answer: "Divisão extrema entre posições ideológicas opostas."
      },
      {
        id: 17,
        question: "O que significa ESG em gestão pública e privada?",
        answer: "Ambiental, Social e Governança — critérios de sustentabilidade."
      },
      {
        id: 18,
        question: "Quais são os BRICS e sua importância?",
        answer: "Brasil, Rússia, Índia, China, África do Sul — bloco de economias emergentes."
      },
      {
        id: 19,
        question: "O que é fake news e qual seu impacto nas democracias?",
        answer: "Notícia falsa disseminada para manipular opinião pública."
      },
      {
        id: 20,
        question: "O que é o Marco Legal da Inteligência Artificial no Brasil?",
        answer: "Projeto de lei que regula o uso ético e seguro de IA."
      },
      {
        id: 21,
        question: "Qual a relevância do 5G para a economia digital?",
        answer: "Aumenta velocidade de conexão e possibilita novas tecnologias."
      },
      {
        id: 22,
        question: "O que é \"desinformação algorítmica\"?",
        answer: "Manipulação de conteúdos por algoritmos que geram bolhas digitais."
      },
      {
        id: 23,
        question: "O que é inflação e como ela afeta a população?",
        answer: "Aumento generalizado de preços; reduz poder de compra."
      },
      {
        id: 24,
        question: "O que são mudanças climáticas e seus impactos?",
        answer: "Alterações no clima causadas por emissão de gases poluentes."
      },
      {
        id: 25,
        question: "O que é agronegócio e seu papel na economia brasileira?",
        answer: "Setor produtivo ligado à agricultura e pecuária, responsável por grande parte das exportações."
      },
      {
        id: 26,
        question: "O que é ChatGPT e por que ganhou destaque global?",
        answer: "IA desenvolvida para gerar textos, com usos em diversas áreas."
      },
      {
        id: 27,
        question: "O que é guerra cibernética?",
        answer: "Conflito digital entre Estados ou grupos, com ataques a redes e dados."
      },
      {
        id: 28,
        question: "Qual a importância da Amazônia para o equilíbrio climático?",
        answer: "Regula chuvas e abriga rica biodiversidade."
      },
      {
        id: 29,
        question: "O que é economia circular?",
        answer: "Modelo que reduz desperdício e reaproveita recursos continuamente."
      },
      {
        id: 30,
        question: "O que é desigualdade social?",
        answer: "Diferença no acesso a direitos e recursos básicos."
      },
      {
        id: 31,
        question: "O que é refugiado?",
        answer: "Pessoa que deixa seu país por perseguição ou guerra."
      },
      {
        id: 32,
        question: "O que é PIB?",
        answer: "Produto Interno Bruto, soma de toda a riqueza produzida no país."
      },
      {
        id: 33,
        question: "O que é ONU?",
        answer: "Organização das Nações Unidas, promove a paz e os direitos humanos."
      },
      {
        id: 34,
        question: "O que é COP?",
        answer: "Conferência do Clima da ONU para discutir mudanças climáticas."
      },
      {
        id: 35,
        question: "O que é inteligência emocional?",
        answer: "Capacidade de lidar com as próprias emoções e as dos outros."
      }
    ]
  }
];