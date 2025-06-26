<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\Tipos_docRepositoryInterface;

class Tipos_docController extends Controller
{
    protected Tipos_docRepositoryInterface $tipos_docRepository;
    protected Request $request;

    public function __construct(Tipos_docRepositoryInterface $tipos_docRepository, Request $request)
    {
        $this->tipos_docRepository = $tipos_docRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->tipos_docRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="tipos_doc.csv"');
            $rows = $payload['rows'];
            $fields = array('id','nombre','category_id','color','patron',

        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['nombre'],$row['category_id'],$row['color'],$row['patron'],

        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->tipos_docRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->tipos_docRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->tipos_docRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->tipos_docRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->tipos_docRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->tipos_docRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

