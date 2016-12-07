<?php

namespace AppBundle\Controller;

use AppBundle\Entity\coffe;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;


class DefaultController extends Controller
{
    /**
     * @Route("/", name="hp")
     */
    public function listAction()
    {
        $coffes = $this->getDoctrine()
          ->getRepository('AppBundle:coffe')
          ->findAll();

        return $this->render('coffe/index.html.twig', array(
          'coffes' => $coffes
        ));

    }
    /**
     * @Route("/create", name="coffe_add")
     */
    public function createAction(Request $request)
    {
        $coffe = new Coffe;
        $form = $this->createFormBuilder($coffe)
          ->add('name', TextType::class, array('attr' => array('class' => 'form-control', 'style' => 'margin-bottom:15px')))
          ->add('adress', TextType::class, array('attr' => array('class' => 'form-control', 'style' => 'margin-bottom:15px')))
          ->add('save', SubmitType::class, array('label' => 'Create Coffe', 'attr' => array('class' => 'btn btn-primary', 'style' => 'margin-bottom:15px')))
          ->getForm();

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
          $name = $form['name']->getData();
          $adress = $form['adress']->getData();

          $coffe->setName($name);
          $coffe->setAdress($adress);
          $em = $this->getDoctrine()->getManager();
          $em->persist($coffe);
          $em->flush();
          $this->addFlash(
            'notice',
            'coffe added'
          );

          return $this->redirectToRoute('hp');
        }

        return $this->render('coffe/create.html.twig', array(
          'form' =>$form->createView()
        ));
    }
    /**
     * @Route("/edit/{id}", name="coffe_edit")
     */
    public function editAction($id, Request $request)
    {
        $coffe = $this->getDoctrine()
          ->getRepository('AppBundle:coffe')
          ->find($id);

        $coffe->setName($coffe->getName());
        $coffe->setAdress($coffe->getAdress());

        $form = $this->createFormBuilder($coffe)
          ->add('name', TextType::class, array('attr' => array('class' => 'form-control', 'style' => 'margin-bottom:15px')))
          ->add('adress', TextType::class, array('attr' => array('class' => 'form-control', 'style' => 'margin-bottom:15px')))
          ->add('save', SubmitType::class, array('label' => 'Update Coffe', 'attr' => array('class' => 'btn btn-primary', 'style' => 'margin-bottom:15px')))
          ->getForm();

          $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
          $name = $form['name']->getData();
          $adress = $form['adress']->getData();

          $em = $this->getDoctrine()->getManager();
          $coffe = $em->getRepository('AppBundle:coffe')->find($id);

          $coffe->setName($name);
          $coffe->setAdress($adress);


          $em->flush();

          $this->addFlash(
            'notice',
            'updated'
          );

          return $this->redirectToRoute('hp');
        }

        return $this->render('coffe/edit.html.twig', array(
          'coffe' => $coffe,
          'form' => $form->createView()
        ));
    }
    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function deleteAction($id)
    {
      $em = $this->getDoctrine()->getManager();
      $coffe = $em->getRepository('AppBundle:coffe')->find($id);

      $em->remove($coffe);
      $em->flush();

      $this->addFlash(
        'notice',
        'delete'
      );
      return $this->redirectToRoute('hp');
    }
}
