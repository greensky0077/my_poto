import { Project } from "@/assets/Projects";
import featuredProjects from "@/assets/FeaturedProjects";

export default async function getProjects(): Promise<Project[]> {
  // Return local featured projects instead of fetching from API
  return Promise.resolve(featuredProjects);
}
