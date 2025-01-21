import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Layout, Globe, Check } from 'lucide-react';

interface WizardStep {
  title: string;
  description: string;
}

const steps: WizardStep[] = [
  {
    title: 'Project Details',
    description: 'Start with the basics of your project'
  },
  {
    title: 'Template Selection',
    description: 'Choose a starting point for your design'
  },
  {
    title: 'Customization',
    description: 'Personalize your project settings'
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

const ProjectWizard: React.FC<ProjectWizardProps> = ({ onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [projectData, setProjectData] = useState<ProjectData>({
    name: '',
    description: '',
    template: 'blank',
    primaryColor: '#2563eb',
    domain: ''
  });

  const templates = [
    { id: 'blank', name: 'Blank Canvas', icon: Layout },
    { id: 'portfolio', name: 'Portfolio', icon: Globe },
    { id: 'blog', name: 'Blog', icon: Layout }
  ];

  const updateProjectData = (field: keyof ProjectData, value: string) => {
    setProjectData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(projectData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return projectData.name.length >= 3 && projectData.description.length >= 10;
      case 1:
        return projectData.template !== '';
      case 2:
        return projectData.primaryColor !== '' && projectData.domain !== '';
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name
              </label>
              <input
                type="text"
                value={projectData.name}
                onChange={(e) => updateProjectData('name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="My Awesome Project"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={projectData.description}
                onChange={(e) => updateProjectData('description', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="Describe your project..."
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => updateProjectData('template', template.id)}
                className={`p-6 border-2 rounded-lg text-center hover:border-blue-500 transition-colors ${
                  projectData.template === template.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <template.icon className="w-8 h-8 mx-auto mb-4 text-gray-600" />
                <h3 className="font-medium">{template.name}</h3>
              </button>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Color
              </label>
              <input
                type="color"
                value={projectData.primaryColor}
                onChange={(e) => updateProjectData('primaryColor', e.target.value)}
                className="w-full h-12 p-1 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Domain
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">https://</span>
                <input
                  type="text"
                  value={projectData.domain}
                  onChange={(e) => updateProjectData('domain', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="myproject.com"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-4">Project Summary</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="text-sm text-gray-900">{projectData.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Description</dt>
                  <dd className="text-sm text-gray-900">{projectData.description}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Template</dt>
                  <dd className="text-sm text-gray-900">
                    {templates.find(t => t.id === projectData.template)?.name}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Domain</dt>
                  <dd className="text-sm text-gray-900">https://{projectData.domain}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Primary Color</dt>
                  <dd className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{ backgroundColor: projectData.primaryColor }}
                    />
                    <span className="text-sm text-gray-900">{projectData.primaryColor}</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Create New Project</h2>
            <p className="text-sm text-gray-500">Step {currentStep + 1} of {steps.length}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900">{steps[currentStep].title}</h3>
            <p className="text-sm text-gray-500">{steps[currentStep].description}</p>
          </div>

          {renderStep()}
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
          <button
            onClick={handleBack}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`flex items-center space-x-2 px-6 py-2 rounded-lg ${
              isStepValid()
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>{currentStep === steps.length - 1 ? 'Create Project' : 'Next'}</span>
            {currentStep === steps.length - 1 ? (
              <Check className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectWizard;