import { Tree, formatFiles, installPackagesTask, generateFiles, joinPathFragments, readProjectConfiguration, names } from '@nrwl/devkit';
import { moduleGenerator } from '@nrwl/nest';

interface DDDSchemaGeneration {
  name: string;
  project: string;
}

export default async function (tree: Tree, schema: DDDSchemaGeneration) {
  const projectRoot = readProjectConfiguration(tree, schema.project).root;

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(projectRoot, 'src', schema.name),
    {
      template: names(schema.name).className,
      className: names(schema.name).className,
      constant: names(schema.name).constantName,
      property: names(schema.name).propertyName
    },

  );
  await moduleGenerator(tree, { name: schema.name, project: schema.project });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
