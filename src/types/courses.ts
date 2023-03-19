import { z } from 'zod';

export const CourseSchema = z.object({
    id: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    launchDate: z.string(),
    status: z.string(),
    description: z.string(),
    duration: z.number(),
    lessonsCount: z.number(),
    containsLockedLessons: z.boolean(),
    previewImageLink: z.string(),
    rating: z.number(),
    meta: z.object({
        slug: z.string(),
        skills: z.array(z.string()).optional(),
        courseVideoPreview: z.object({
            link: z.string(),
            duration: z.number(),
            previewImageLink: z.string()
        })
    })
});

const CourseLessonSchema = z.object({
    id: z.string(),
    title: z.string(),
    duration: z.number(),
    order: z.number(),
    type: z.string(),
    status: z.string(),
    link: z.string(),
    previewImageLink: z.string(),
    meta: z.object({})
});

export const CoursePreviewSchema = z.object({
    id: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    launchDate: z.string(),
    status: z.string(),
    description: z.string(),
    duration: z.number(),
    previewImageLink: z.string(),
    rating: z.number(),
    lessons: CourseLessonSchema.array(),
    meta: z.object({
        slug: z.string(),
        skills: z.array(z.string()),
        courseVideoPreview: z.object({
            link: z.string(),
            duration: z.number(),
            previewImageLink: z.string()
        })
    }),
    containsLockedLessons: z.boolean()
});

export type ICourse = z.infer<typeof CourseSchema>;
export type ICourseLesson = z.infer<typeof CourseLessonSchema>;
export type ICoursePreview = z.infer<typeof CourseSchema>;
