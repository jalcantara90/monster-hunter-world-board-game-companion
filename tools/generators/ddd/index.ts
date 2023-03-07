import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
  names,
} from '@nrwl/devkit';
import { moduleGenerator } from '@nrwl/nest';

interface DDDSchemaGeneration {
  name: string;
  project: string;
}

export default async function (tree: Tree, schema: DDDSchemaGeneration) {
  const projectRoot = readProjectConfiguration(tree, schema.project).root;

  const entityName = schema.name.substring(0, schema.name.length-1);
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(projectRoot, 'src', schema.name),
    {
      template: names(entityName).className,
      className: names(entityName).className,
      constant: names(entityName).constantName,
      propertyName: names(entityName).propertyName,
      tmpl: '',
    }
  );

  await moduleGenerator(tree, { name: schema.name, project: schema.project });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
