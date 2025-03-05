import React from 'react'
import { ConteoGeneral, ConteoCarrera, NubePositiva, NubeNegativa } from "../components";

const Blog = () => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased mt-20">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl">
          <header className="mb-4 lg:mb-6">
            <address className="flex items-center mb-6">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                {/* Div para el avatar */}
                
                
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              Análisis de sentimientos (NLP)
            </h1>
          </header>
          <p className="leading-relaxed">Este ejercicio utilizó herramientas de procesamiento de lenguaje natural en Python para analizar los sentimientos expresados en las respuestas de una encuesta aplicada a egresados de la Universidad Iberoamericana. A través de técnicas como la limpieza y preprocesamiento del texto, el uso de modelos de clasificación de sentimientos, se logró interpretar la percepción de los encuestados. <br /> <br />

            El análisis se realizó en función de las diferentes carreras académicas, permitiendo identificar tendencias clave en las opiniones de los estudiantes. Este enfoque metodológico brinda una perspectiva más profunda sobre la experiencia estudiantil y apoya la toma de decisiones informadas en el entorno académico.</p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Metodología</h2>
          <p>El análisis se realizó mediante Google Colab y diversas bibliotecas especializadas en procesamiento de lenguaje natural. A continuación las herramientas y el enfoque metodológico utilizado: <br /> <br /></p>
          <ul className="list-disc list-inside leading-loose">
            <li><b>Pandas</b>: para la carga y manipulación de los datos.</li>
            <li><b>Numpy</b>: para operaciones numéricas y manipulación de matrices.</li>
            <li><b>Re (Expresiones Regulares)</b>: limpieza y estandarización de texto.</li>
            <li><b>Pysentimiento</b>: especializado en análisis de sentimientos en español.</li>
            <li><b>NLTK</b>: utilizada para tokenización y eliminación de stopwords.</li>
            <li><b>Chart.js</b>: empleada para visualización de datos en React</li>
          </ul>
          {/* Sección para código */}
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-10 mb-2">Librerías</h4>
          <p className="mb-4">
            Carga de librerías y recursos necesarios para el análisis
          </p>
          <pre className="p-2 bg-gray-200 text-gray-800 rounded-lg h-64 overflow-y-auto overflow-x-auto">
            <code className="language-python text-sm">
              {`
  import pandas as pd
  import numpy as np
  ----- 
  from pysentimiento import create_analyzer
  ----- 
  import re
  import string
  import nltk
  from nltk.tokenize import word_tokenize
  from nltk.corpus import stopwords
  from nltk.stem import WordNetLemmatizer
  from nltk import pos_tag
  ----- 
  nltk.download('punkt')
  nltk.download('stopwords')
  nltk.download('averaged_perceptron_tagger')
  nltk.download('wordnet')
   
`}
            </code>
          </pre>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-10 mb-2">Preprocesamiento</h4>
          <p className="mb-4">
            Para preparar las respuestas de los encuestados, se aplicó un proceso de limpieza del texto que incluyó convertir todo a minúsculas, eliminar signos de puntuación, números y caracteres innecesarios. Además, se filtraron palabras comunes (excepto "no", para preservar su contexto negativo) y se simplificaron las palabras a su forma básica mediante lematización. Este procedimiento permitió obtener un texto claro y uniforme, ideal para un análisis preciso de sentimientos y tendencias.


          </p>
          <pre className="p-2 bg-gray-200 text-gray-800 rounded-lg h-64 overflow-y-auto overflow-x-auto">
            <code className="language-python text-sm">
              {`  
  def preprocess_text_custom(text, flg_lemm=True, lst_stopwords=None):
    
  if not isinstance(text, str):
      return "" 

  clean_text = text.lower()

  stopwords_custom = lst_stopwords if lst_stopwords else stopwords.words('spanish')
  stopwords_custom = [word for word in stopwords_custom if word != 'no'] 

  clean_text = re.compile('[%s]' % re.escape(string.punctuation)).sub(' ', clean_text)

  clean_text = re.sub(r'\\d+', '', clean_text)

  clean_text = re.sub(r'(.)\\1{2,}', r'\\1', clean_text)

  tokens = word_tokenize(clean_text)

  tokens = [word for word in tokens if word not in stopwords_custom]

  if flg_lemm:
      lemmatizer = WordNetLemmatizer()
      tokens = [lemmatizer.lemmatize(word, get_wordnet_pos(tag)) for word, tag in pos_tag(tokens)]

  clean_text = " ".join(tokens)

  df['Sugerencias_Limpias'] = df['Sugerencias'].apply(lambda x: preprocess_text_custom(x))

  df['Sentimiento'] = df['Sugerencias_Limpias'].apply(lambda x: analyzer.predict(x).output)

`}
            </code>
          </pre>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-10 mb-2">Limpieza y análisis</h4>
          <p className="mb-4">
            A continuación podemos observar el resultado de la limpieza aplicada a la columna de "Sugerencias" de la encuesta, así como el resultado del análisis generado por Pysentimiento en categorías Positivas, Neutras y Negativas.
          </p>


          <table className="min-w-full table-auto border-collapse border border-gray-300 mt-10">
            {/* Títulos */}
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Sugerencias</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Sugerencias Limpias</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Sentimiento</th>
              </tr>
            </thead>
            {/* Filas de contenido */}
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 leading-tight">1) Incluyan los decimales en las calificacione...</td>
                <td className="border border-gray-300 px-4 py-3 leading-tight">incluyan decimales calificaciones quiten redon...</td>
                <td className="border border-gray-300 px-4 py-3 text-center">NEG</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 leading-tight">Promueven el "interés" social para impulsar el...</td>
                <td className="border border-gray-300 px-4 py-3 leading-tight">promueven interés social impulsar talento trav...</td>
                <td className="border border-gray-300 px-4 py-3 text-center">NEG</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 leading-tight">Pienso que los profesores tienen la mejor disp...</td>
                <td className="border border-gray-300 px-4 py-3 leading-tight">pienso profesores mejor disposición enseñarnos...</td>
                <td className="border border-gray-300 px-4 py-3 text-center">NEU</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 leading-tight">Al menos el 50% de los estudiantes queremos us...</td>
                <td className="border border-gray-300 px-4 py-3 leading-tight">menos estudiantes queremos usar gym pequeño pr...</td>
                <td className="border border-gray-300 px-4 py-3 text-center">NEU</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 leading-tight">Solo me parece que a las personas que les dan...</td>
                <td className="border border-gray-300 px-4 py-3 leading-tight">solo parece persona dan beca no deberían quita...</td>
                <td className="border border-gray-300 px-4 py-3 text-center">NEG</td>
              </tr>
            </tbody>
          </table>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-10 mb-2">Resultados del conteo general</h4>
          <p className="mb-4">
            Podemos observar que a pesar de tener una mayoría de sugerencias neutrales, hay una cantidad considerable de observaciones negativas, lo que indica que hay áreas que pueden generar insatisfacción. Las opiniones favorables son limitadas lo que sugiere la necesidad de abordar las inquietudes de los encuestados y fomentar un mayor sentido de satisfacción.
          </p>
          <ConteoGeneral />


          <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-10 mb-2">Resultados del análisis por carrera</h4>
          <p className="mb-4">
            Desglozando las respuestas por carrera podemos apreciar que Arquitectura y Derecho son las carreras que tienen mayor cantidad de respuestas negativas. Esto indica que los estudiantes o egresados podrían estar experimentando una falta de entusiasmo o conformidad con sus programas académicos, lo que podría ser un área de oportunidad para la institución al considerar mejoras en su plan de estudios o enfoques pedagógicos.
          </p>
          <ConteoCarrera />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-10 mb-2">Nube de palabras positivas</h4>
          <NubePositiva />

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-10 mb-2">Nube de palabras negativas</h4>
          <NubeNegativa />


          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4">Conclusiones</h3>

          <p>El análisis de sentimientos, ofrece una perspectiva más completa de las experiencias y opiniones de los encuestados. Mientras que los datos cuantitativos brindan una visión general sobre las tendencias numéricas y patrones, el análisis de sentimientos permite profundizar en la naturaleza emocional de esas respuestas, capturando matices que no siempre son evidentes en los números.</p>
        </article>
      </div>
    </main>

  );
};

export default Blog