import adobeXd from '../app/assets/svg/skills/adobe-xd.svg';
import adobeaudition from '../app/assets/svg/skills/adobeaudition.svg';
import afterEffects from '../app/assets/svg/skills/after-effects.svg';
import angular from '../app/assets/svg/skills/angular.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import blender from '../app/assets/svg/skills/blender.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import bulma from '../app/assets/svg/skills/bulma.svg';
import c from '../app/assets/svg/skills/c.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import capacitorjs from '../app/assets/svg/skills/capacitorjs.svg';
import coffeescript from '../app/assets/svg/skills/coffeescript.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import csharp from '../app/assets/svg/skills/csharp.svg';
import css from '../app/assets/svg/skills/css.svg';
import dart from '../app/assets/svg/skills/dart.svg';
import deno from '../app/assets/svg/skills/deno.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import fastify from '../app/assets/svg/skills/fastify.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import flutter from '../app/assets/svg/skills/flutter.svg';
import gcp from '../app/assets/svg/skills/gcp.svg';
import gimp from '../app/assets/svg/skills/gimp.svg';
import git from '../app/assets/svg/skills/git.svg';
import go from '../app/assets/svg/skills/go.svg';
import graphql from '../app/assets/svg/skills/graphql.svg';
import haxe from '../app/assets/svg/skills/haxe.svg';
import html from '../app/assets/svg/skills/html.svg';
import illustrator from '../app/assets/svg/skills/illustrator.svg';
import ionic from '../app/assets/svg/skills/ionic.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import julia from '../app/assets/svg/skills/julia.svg';
import kotlin from '../app/assets/svg/skills/kotlin.svg';
import lightroom from '../app/assets/svg/skills/lightroom.svg';
import markdown from '../app/assets/svg/skills/markdown.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import matlab from '../app/assets/svg/skills/matlab.svg';
import memsql from '../app/assets/svg/skills/memsql.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import nuxtJS from '../app/assets/svg/skills/nuxtJS.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import photoshop from '../app/assets/svg/skills/photoshop.svg';
import php from '../app/assets/svg/skills/php.svg';
import picsart from '../app/assets/svg/skills/picsart.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import premierepro from '../app/assets/svg/skills/premierepro.svg';
import prisma from '../app/assets/svg/skills/prisma.svg';
import python from '../app/assets/svg/skills/python.svg';
import pytorch from '../app/assets/svg/skills/pytorch.svg';
import react from '../app/assets/svg/skills/react.svg';
import ruby from '../app/assets/svg/skills/ruby.svg';
import selenium from '../app/assets/svg/skills/selenium.svg';
import sketch from '../app/assets/svg/skills/sketch.svg';
import strapi from '../app/assets/svg/skills/strapi.svg';
import svelte from '../app/assets/svg/skills/svelte.svg';
import swift from '../app/assets/svg/skills/swift.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import unity from '../app/assets/svg/skills/unity.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import vue from '../app/assets/svg/skills/vue.svg';
import vuetifyjs from '../app/assets/svg/skills/vuetifyjs.svg';
import webix from '../app/assets/svg/skills/webix.svg';
import wolframalpha from '../app/assets/svg/skills/wolframalpha.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';

import pandas from '../app/assets/svg/skills/pandas.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import dotnetcore from '../app/assets/svg/skills/dotnetcore.svg'
import kubernetes from '../app/assets/svg/skills/kubernetes.svg'
import linux from '../app/assets/svg/skills/linux.svg'
import sqlalchemy from '../app/assets/svg/skills/sqlalchemy.svg'
import fastapi from '../app/assets/svg/skills/fastapi.svg'

const skillImageMap = {
  'gcp': gcp,
  'html': html,
  'photoshop': photoshop,
  'docker': docker,
  'illustrator': illustrator,
  'adobe xd': adobeXd,
  'after effects': afterEffects,
  'css': css,
  'angular': angular,
  'javascript': javascript,
  'next js': nextJS,
  'nuxt js': nuxtJS,
  'react': react,
  'svelte': svelte,
  'typescript': typescript,
  'vue': vue,
  'bootstrap': bootstrap,
  'bulma': bulma,
  'capacitorjs': capacitorjs,
  'coffeescript': coffeescript,
  'memsql': memsql,
  'mongodb': mongoDB,
  'mysql': mysql,
  'postgresql': postgresql,
  'tailwind': tailwind,
  'vitejs': vitejs,
  'vuetifyjs': vuetifyjs,
  'c': c,
  'c++': cplusplus,
  'c#': csharp,
  'dart': dart,
  'go': go,
  'java': java,
  'kotlin': kotlin,
  'julia': julia,
  'matlab': matlab,
  'php': php,
  'prisma': prisma,
  'python': python,
  'ruby': ruby,
  'swift': swift,
  'adobe audition': adobeaudition,
  'aws': aws,
  'deno': deno,
  'django': django,
  'firebase': firebase,
  'gimp': gimp,
  'git': git,
  'graphql': graphql,
  'lightroom': lightroom,
  'materialui': materialui,
  'nginx': nginx,
  'numpy': numpy,
  'opencv': opencv,
  'premiere pro': premierepro,
  'pytorch': pytorch,
  'selenium': selenium,
  'strapi': strapi,
  'tensorflow': tensorflow,
  'webix': webix,
  'wordpress': wordpress,
  'azure': azure,
  'blender': blender,
  'fastify': fastify,
  'figma': figma,
  'flutter': flutter,
  'haxe': haxe,
  'ionic': ionic,
  'markdown': markdown,
  'microsoft office': microsoftoffice,
  'picsart': picsart,
  'sketch': sketch,
  'unity': unity,
  'wolframalpha': wolframalpha,
  'canva': canva,
  'pandas': pandas,
  'sklearn': scikitlearn,
  '.net': dotnet,
  '.net core': dotnetcore,
  'kubernetes': kubernetes,
  'linux': linux,
  'sqlalchemy': sqlalchemy,
  'fastapi': fastapi,
};

export const skillsImage = (skill) => {
  const s = skill.toLowerCase();
  return skillImageMap[s];
};
