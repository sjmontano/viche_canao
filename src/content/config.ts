import { defineCollection, z } from 'astro:content';
const productos = defineCollection({ type:'content', schema: z.object({ nombre: z.string(), slug: z.string(), tipo: z.enum(['puro','dorado','vinete']), descripcion: z.string(), aroma: z.string(), notas: z.array(z.string()), usos: z.string(), foto: z.string(), destacado: z.boolean().default(false), whatsapp_msg: z.string() }) });
const historias = defineCollection({ type:'content', schema: z.object({ titulo: z.string(), slug: z.string(), fecha: z.string(), resumen: z.string(), fotos: z.array(z.string()).default([]) }) });
export const collections = { productos, historias };
