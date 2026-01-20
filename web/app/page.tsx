const useCases = [
  {
    title: "Reconocimiento de red",
    emoji: "🌐",
    description:
      "Descubre hosts y rutas activas en entornos corporativos, laboratorios o proyectos de hacking ético.",
    highlights: [
      "Identificación de dispositivos nuevos en minutos",
      "Detección de sistemas operativos y huellas TCP/IP",
      "Mapeo de topologías antes de ejecutar pruebas intrusivas",
    ],
    commands: [
      {
        label: "Descubrimiento rápido",
        command: "nmap -sn 10.10.0.0/24",
      },
      {
        label: "Inventario con OS detection",
        command: "nmap -O --osscan-guess 192.168.1.0/24",
      },
    ],
  },
  {
    title: "Auditoría de puertos y servicios",
    emoji: "🛡️",
    description:
      "Encuentra servicios expuestos, versiones vulnerables y configuraciones débiles para reducir superficie de ataque.",
    highlights: [
      "Escaneo de puertos TCP/UDP críticos con perfiles personalizados",
      "Detección de versiones y banner grabbing",
      "Confirmación de políticas de segmentación y firewalls",
    ],
    commands: [
      {
        label: "Escaneo completo TCP",
        command: "nmap -sS -sV -p1-65535 203.0.113.42",
      },
      {
        label: "Servicios UDP críticos",
        command: "nmap -sU -p 53,123,161 198.51.100.10",
      },
    ],
  },
  {
    title: "Automatización y scripts NSE",
    emoji: "🤖",
    description:
      "Integra Nmap en pipelines de seguridad, orquesta escaneos y ejecuta scripts especializados con el motor NSE.",
    highlights: [
      "Automatiza chequeos recurrentes en CI/CD",
      "Detecta CVE específicas con scripts NSE oficiales",
      "Genera reportes XML/JSON para dashboards",
    ],
    commands: [
      {
        label: "Scripts de vulnerabilidades",
        command:
          "nmap --script vuln -oX report.xml 10.0.0.0/27",
      },
      {
        label: "Auditoría personalizada",
        command:
          "nmap --datadir ./scripts --script firewalk 172.16.1.1",
      },
    ],
  },
];

const workflows = [
  {
    phase: "1. Descubrimiento",
    goal: "Establecer visibilidad rápida del entorno objetivo y priorizar hosts.",
    checklist: [
      "Escanear rangos conocidos con `-sn` o `-Pn` cuando exista filtrado ICMP.",
      "Registrar IPs con latencias anómalas para segmentación posterior.",
      "Cruzar resultados con CMDB o inventario interno.",
    ],
  },
  {
    phase: "2. Análisis profundo",
    goal: "Identificar rutas de ataque factibles mediante fingerprinting y análisis de servicios.",
    checklist: [
      "Ejecutar `-sV` y `-sC` sobre hosts críticos para detectar versiones vulnerables.",
      "Usar `--reason` para entender respuestas de firewall y ajustar técnicas.",
      "Complementar con escaneos UDP selectivos sobre servicios expuestos.",
    ],
  },
  {
    phase: "3. Automatización",
    goal: "Incorporar controles continuos y reportes accionables.",
    checklist: [
      "Programar cron jobs o pipelines CI con salidas XML/JSON.",
      "Aplicar scripts NSE específicos (`ssl-enum-ciphers`, `http-security-headers`).",
      "Centralizar resultados en SIEM o paneles internos para seguimiento.",
    ],
  },
];

const resources = [
  {
    name: "Referencia oficial de NSE",
    url: "https://nmap.org/nsedoc/",
    description: "Explora todos los scripts disponibles, categorías y ejemplos.",
  },
  {
    name: "Guía de rendimiento de Nmap",
    url: "https://nmap.org/book/performance.html",
    description:
      "Ajusta tiempos, opciones de paralelización y estrategias para redes extensas.",
  },
  {
    name: "Cheat sheet interactiva",
    url: "https://nmap.org/man/",
    description:
      "Consulta parámetros avanzados, flags combinados y sintaxis completa.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(circle_at_top,_rgba(59,130,246,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Seguridad ofensiva & defensiva
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Usos prácticos de <span className="text-sky-400">Nmap</span> para
            equipos de redes y seguridad.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Nmap es la navaja suiza del descubrimiento de red. Aprende a
            combinar técnicas de escaneo, fingerprinting y automatización para
            acelerar auditorías, monitoreo continuo y ejercicios de Red/Blue
            Team.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.title}
              className="flex flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 shadow-2xl shadow-slate-900/30 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{useCase.emoji}</span>
                <h2 className="text-2xl font-semibold text-slate-50">
                  {useCase.title}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                {useCase.description}
              </p>
              <ul className="flex flex-col gap-3 text-sm text-slate-300">
                {useCase.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 leading-relaxed before:mt-2 before:h-2 before:w-2 before:flex-none before:rounded-full before:bg-sky-400/80"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/80 p-4">
                {useCase.commands.map((snippet) => (
                  <div key={snippet.command} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {snippet.label}
                    </span>
                    <code className="rounded-xl bg-slate-900 px-3 py-2 font-mono text-sm text-slate-100 ring-1 ring-slate-800">
                      {snippet.command}
                    </code>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="flex flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 shadow-2xl shadow-slate-900/30 backdrop-blur">
            <h2 className="text-2xl font-semibold text-slate-50">
              Flujo de trabajo recomendado
            </h2>
            <div className="space-y-6">
              {workflows.map((workflow) => (
                <div
                  key={workflow.phase}
                  className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-100">
                    {workflow.phase}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{workflow.goal}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                    {workflow.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 before:mt-1.5 before:h-1.5 before:w-1.5 before:flex-none before:rounded-full before:bg-emerald-400/90"
                      >
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="flex flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 shadow-2xl shadow-slate-900/30 backdrop-blur">
            <h2 className="text-2xl font-semibold text-slate-50">
              Métricas y reporting
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Centraliza los hallazgos exportando resultados en formatos
              estructurados. Utiliza `-oA` para generar simultáneamente XML,
              Nmap normal y formato grepable, ideal para pipelines de análisis.
            </p>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/80 p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Comando sugerido
              </span>
              <code className="mt-2 block rounded-xl bg-slate-900 px-3 py-2 font-mono text-sm text-slate-100 ring-1 ring-slate-800">
                nmap -sS -sV -O -oA informes/escaneo-web 10.44.0.12
              </code>
              <p className="mt-3 text-xs text-slate-400">
                Integra el XML en Sonar, Elastic, Grafana u otra plataforma de
                correlación para generar alertas proactivas.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2 before:mt-2 before:h-2 before:w-2 before:flex-none before:rounded-full before:bg-fuchsia-400/80">
                Comparte el histórico de puertos expuestos para validar cambios
                en firewalls y microsegmentación.
              </li>
              <li className="flex items-start gap-2 before:mt-2 before:h-2 before:w-2 before:flex-none before:rounded-full before:bg-indigo-400/80">
                Crea KPIs como “tiempo de exposición de puerto crítico” o
                “variaciones de superficie” por sprint.
              </li>
              <li className="flex items-start gap-2 before:mt-2 before:h-2 before:w-2 before:flex-none before:rounded-full before:bg-amber-400/80">
                Alimenta modelos de detección para evaluar desviaciones en
                horarios o patrones de respuesta.
              </li>
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 shadow-2xl shadow-slate-900/30 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-2xl font-semibold text-slate-50">
                Recursos recomendados
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Amplía tus capacidades con documentación oficial y guías creadas
                por la comunidad. Cada recurso ayuda a profundizar en técnicas
                avanzadas y casos de uso específicos.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              {resources.map((resource) => (
                <a
                  key={resource.url}
                  href={resource.url}
                  className="group flex flex-col gap-1 rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5 transition hover:border-slate-700 hover:bg-slate-900/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base font-semibold text-sky-300 group-hover:text-sky-200">
                    {resource.name}
                  </span>
                  <span className="text-sm text-slate-300">
                    {resource.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
