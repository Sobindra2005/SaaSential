import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Check, ShoppingBag, NotebookPen, FileUser } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import Input, { TextArea } from '../Common/Input';
import { AnimatePresence, motion } from "framer-motion"

interface WizardStep {
  title: string;
  description: string;
}

const steps: WizardStep[] = [
  {
    title: 'Project Type',
    description: 'Select the type of project you want to create'
  },
  {
    title: 'Project Details',
    description: 'Start with the basics of your project'
  },
  {
    title: 'Template Selection',
    description: 'Choose a starting point for your design'
  },
  {
    title: 'Confirmation',
    description: 'Review and create your project'
  }
];

interface ProjectData {
  name: string;
  description: string;
  template: string;
  primaryColor: string;
  domain: string;
}

interface ProjectWizardProps {
  onClose: () => void;
  onComplete: (data: ProjectData) => void;
}

const schema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  template: z.string().nonempty(),
  primaryColor: z.string().nonempty(),
  domain: z.string().nonempty()
});

const defaultValues: ProjectData = {
  name: '',
  description: '',
  template: '',
  primaryColor: '#000000',
  domain: ''
};

const ProjectWizard: React.FC<ProjectWizardProps> = ({ onClose, onComplete }) => {
  const {
    control,
    setValue,
    handleSubmit,
    watch,
    trigger,
    register
  } = useForm<ProjectData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [stepValid, setStepValid] = useState(false);

  const templates = [
    { id: 'portfolio', name: 'Portfolio', icon: FileUser },
    { id: 'blog', name: 'Blog', icon: NotebookPen },
    { id: 'E-commerce', name: 'E-commerce', icon: ShoppingBag }
  ];

  const projectData = watch();

  const handleNext = async () => {
    const isStepValid = await validateCurrentStep();
    if (isStepValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleSubmit(onComplete)();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      onClose();
    }
  };

  const validateCurrentStep = async () => {
    let isValid = false;
    switch (currentStep) {
      case 0:
        isValid = await trigger(['template']);
        break;
      case 1:
        isValid = await trigger(['name', 'description']);
        break;
      case 2:
        isValid = await trigger(['primaryColor', 'domain']);
        break;
      case 3:
        isValid = true;
        break;
      default:
        isValid = false;
    }
    setStepValid(isValid);
    return isValid;
  };

  React.useEffect(() => {
    validateCurrentStep();
  }, [currentStep, projectData]);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {templates.map(template => (
              <button
                key={template.id}
                onClick={() => setValue('template', template.id)}
                className={`p-6 border-2 rounded-lg text-center hover:border-blue-500 transition-colors ${projectData.template === template.id ? 'border-blue-500 bg-[#1c2639]' : 'border-gray-700'
                  }`}
              >
                <template.icon className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                <h3 className="font-medium text-gray-300">{template.name}</h3>
              </button>
            ))}
          </div>

        );
      case 1:
        return (
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6">
              <div>

                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="text"
                      {...field}
                      label='Project Name'
                      id='name'
                      register={register}
                      placeholder="e.g., Agrosikshya"
                    />
                  )}
                />
              </div>
              <div>

                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      label='description'
                      id='description'
                      register={register}
                      placeholder="e.g., A platform for agricultural education..."
                    />
                  )}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        );

      case 2:
        return (
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Primary Color</label>
                <Controller
                  name="primaryColor"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="color"
                      {...field}
                      className="w-full h-12 p-1 rounded-lg border border-gray-700 bg-[#1c2639]"
                    />
                  )}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Domain</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">https://</span>
                  <Controller
                    name="domain"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        {...field}
                        className="flex-1 px-4 py-2 bg-[#1c2639] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                        placeholder="myproject.com"
                      />
                    )}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        );
      case 3:
        return (
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6">
              <div className="bg-[#1c2639] p-6 rounded-lg">
                <h3 className="font-medium mb-4 text-gray-300">Project Summary</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="text-sm text-white">{projectData.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Description</dt>
                    <dd className="text-sm text-white">{projectData.description}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Template</dt>
                    <dd className="text-sm text-white">
                      {templates.find(t => t.id === projectData.template)?.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Domain</dt>
                    <dd className="text-sm text-white">https://{projectData.domain}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Primary Color</dt>
                    <dd className="flex items-center space-x-2">
                      <div
                        className="w-6 h-6 rounded-full border border-gray-700"
                        style={{ backgroundColor: projectData.primaryColor }}
                      />
                      <span className="text-sm text-white">{projectData.primaryColor}</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </AnimatePresence>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode='wait'>

    <motion.div
    initial={{ opacity: 0,y:20 }}
    animate={{ opacity: 1 ,y:0}}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-white">
      <div className="bg-[#141d2d] rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
            <p className="text-sm text-gray-500">{steps[currentStep].description}</p>
            <div className="mt-2 text-sm text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
          <button className="text-white text-opacity-70 hover:text-opacity-100" onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-6 py-8">{renderStep()}</div>
        <div className="px-6 py-4 bg-[#0f1724] flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-white text-opacity-70 hover:text-opacity-100 transition-colors flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back</span>
          </button>
          <button
            onClick={handleNext}
            disabled={!stepValid}
            className={`px-4 py-2 rounded-lg font-medium flex items-center ${stepValid
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
          >
            <span>{currentStep === steps.length - 1 ? 'Create' : 'Next'}</span>
            {currentStep === steps.length - 1 ? (
              <Check className="w-4 h-4 ml-2" />
            ) : (
              <ArrowRight className="w-4 h-4 ml-2" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default ProjectWizard;